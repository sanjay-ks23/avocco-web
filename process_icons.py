from PIL import Image, ImageOps, ImageFilter, ImageDraw
import os

def process_image(image_path, output_dir):
    try:
        img = Image.open(image_path)
        width, height = img.size
        
        # Split into 4 equal parts
        part_width = width // 4
        
        icon_names = ['tech-toe-box', 'tech-midfoot', 'tech-low-drop', 'tech-midsole']
        
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        for i, name in enumerate(icon_names):
            # Crop the full column first
            left = i * part_width
            right = (i + 1) * part_width
            box = (left, 0, right, height)
            col_part = img.crop(box)
            
            # DEBUG: Save column to check alignment
            col_part.save(os.path.join(output_dir, f'debug_col_{i}.png'))

            # Crop center to remove outer circles
            # Column is ~256px wide. Height is 253px.
            # User says content is missing.
            # Maximizing crop to 240px to capture EVERYTHING.
            # If rings appear, we might need to mask them specifically, 
            # but priority is capturing the foot structure.
            c_width, c_height = col_part.size
            crop_size = 240 
            
            # Default center
            cx = c_width // 2
            cy = c_height // 2
            
            # Manual offsets for specific icons if needed
            # 0: Toe Box, 1: Midfoot, 2: Low Drop, 3: Midsole
            dx = 0
            dy = 0
            
            # Standard logic only - NO custom offsets for i == 3
            
            # Safe Crop Logic: Ensure we get exactly crop_size x crop_size
            # by pasting into a blank canvas if out of bounds.
            
            # Desired crop box coordinates (can be negative)
            x1 = cx - crop_size // 2 + dx
            y1 = cy - crop_size // 2 + dy
            x2 = x1 + crop_size
            y2 = y1 + crop_size
            
            # Create blank canvas (white background to match thresholding expectation)
            # We will threshold later, so white is safe for now.
            part = Image.new('L', (crop_size, crop_size), 255)
            
            # Calculate intersection with source image
            src_w, src_h = col_part.size
            
            # Source coordinates to crop from
            sx1 = max(0, x1)
            sy1 = max(0, y1)
            sx2 = min(src_w, x2)
            sy2 = min(src_h, y2)
            
            # Destination coordinates to paste to
            dx1 = max(0, -x1)
            dy1 = max(0, -y1)
            
            if sx2 > sx1 and sy2 > sy1:
                src_crop = col_part.crop((sx1, sy1, sx2, sy2))
                part.paste(src_crop, (dx1, dy1))
            
            # Convert to grayscale
            gray = part.convert('L')
            
            # Thresholding
            # The image has black lines on light background.
            # We want to keep black lines (low values) and make everything else white (high values).
            # Then we make white transparent.
            
            # Threshold: pixels < 150 become 0 (black), others 255 (white)
            # Increased threshold to 150 to ensure we catch lighter gray lines (like in the 3rd icon)
            threshold_val = 150
            bw = gray.point(lambda x: 0 if x < threshold_val else 255, '1')
            
            # Now we have black lines on white background.
            # Convert to RGBA
            rgba = bw.convert('RGBA')
            data = rgba.getdata()
            
            new_data = []
            for item in data:
                # item is (R, G, B, A)
                # If white (255, 255, 255), make transparent
                if item[0] == 255 and item[1] == 255 and item[2] == 255:
                    new_data.append((255, 255, 255, 0))
                else:
                    # Keep black lines, but ensure they are solid black
                    new_data.append((0, 0, 0, 255))
            
            rgba.putdata(new_data)
            
            # Apply a large circular mask just to soften corners of the square box
            # but keep it larger than the content (230px)
            mask = Image.new('L', rgba.size, 0)
            draw = ImageDraw.Draw(mask)
            m_width, m_height = rgba.size
            draw.ellipse((2, 2, m_width-2, m_height-2), fill=255)
            
            # Standard mask only - NO custom masking for i == 3
            
            current_alpha = rgba.split()[3]
            new_alpha = Image.new('L', rgba.size, 0)
            new_alpha.paste(current_alpha, (0, 0), mask=mask)
            
            rgba.putalpha(new_alpha)
            
            # Trim whitespace (crop to bounding box of non-transparent pixels)
            # Get bounding box of the alpha channel
            bbox = rgba.getbbox()
            if bbox:
                rgba = rgba.crop(bbox)
            
            # Save
            output_path = os.path.join(output_dir, f'{name}.png')
            rgba.save(output_path)
            print(f'Saved {output_path}')
            
    except Exception as e:
        print(f"Error processing image: {e}")

img_path = '/home/sanj-ai/.gemini/antigravity/brain/b0e3179f-2b44-4cc5-8ffc-daa83632c036/uploaded_image_1764661061211.png'
output_directory = '/home/sanj-ai/Documents/Avocco/avocco-web/src/assets'

process_image(img_path, output_directory)

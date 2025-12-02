from PIL import Image
import os

def extract_history_image():
    # Path to the uploaded reference image
    input_path = '/home/sanj-ai/.gemini/antigravity/brain/b0e3179f-2b44-4cc5-8ffc-daa83632c036/uploaded_image_1764667379943.png'
    output_path = 'src/assets/about-heritage.png'
    
    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    try:
        img = Image.open(input_path)
        width, height = img.size
        
        # The image contains a header, then the photos, then text.
        # We want to crop the photos.
        # Based on typical layouts, the photos are likely in the top half, below the header.
        # Let's try to crop the middle-top section.
        
        # Heuristic: Crop from 15% down to 55% down.
        # This skips the "OUR HISTORY" header and the text below.
        # And we take the full width.
        
        top = int(height * 0.12) # Skip header
        bottom = int(height * 0.60) # Stop before text
        
        # Refined crop: The image shows two photos side by side.
        # Let's crop a wide strip.
        
        cropped = img.crop((0, top, width, bottom))
        
        # Save to assets
        cropped.save(output_path)
        print(f"Successfully extracted history image to {output_path}")
        print(f"Original size: {width}x{height}, Cropped size: {cropped.size}")
        
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    extract_history_image()

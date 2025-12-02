from PIL import Image, ImageFilter, ImageOps
import numpy as np

def remove_background(input_path, output_path, threshold=240):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Change all white (also shades of whites) pixels to transparent
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        
        # Crop to content
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path} to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process White Shoe
remove_background(
    '/home/sanj-ai/Documents/Avocco/avocco-web/src/assets/zfly-white-raw.jpg',
    '/home/sanj-ai/Documents/Avocco/avocco-web/src/assets/zfly-white.png',
    threshold=230 # Slightly lower threshold for white shoe to catch shadows
)

# Process Black Shoe
remove_background(
    '/home/sanj-ai/Documents/Avocco/avocco-web/src/assets/zfly-black-raw.jpg',
    '/home/sanj-ai/Documents/Avocco/avocco-web/src/assets/zfly-black.png',
    threshold=240
)

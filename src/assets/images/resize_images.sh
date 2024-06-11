# Path to the folder containing images and videos
folder="/Users/learning/Desktop/store-frontend/src/assets/images"

# Loop through all files in the folder
for file in "$folder"/*; do
    # Check if the file name contains "-image" and skip it if true
    if [[ "$file" == *"-small"* ]]; then
        echo "Skipping file with '-small' in the name: $file"
        continue
    fi

    # Check if the file is an image
    if [[ -f "$file" && $(file --mime-type -b "$file") =~ image/* ]]; then
        # Resize the image and overwrite if the file already exists
        ffmpeg -y -i "$file" -vf scale=20:-1 "${file%.*}-small.${file##*.}"
    elif [[ -f "$file" && $(file --mime-type -b "$file") =~ video/* ]]; then
        # Resize the video (optional, you can remove this block if you don't need to resize videos)
        # ffmpeg -y -i "$file" -vf scale=20:-1 "${file%.*}-small.${file##*.}"
        echo "Skipping video: $file"
    else
        echo "Skipping unsupported file: $file"
    fi
done

# command: sh src/assets/images/resize_images.sh
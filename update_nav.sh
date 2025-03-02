#!/bin/bash

# List of all HTML files to update
FILES=(
  "/Users/user/code/cindy-website/pages/cindy-who.html"
  "/Users/user/code/cindy-website/pages/consulting-coaching.html"
  "/Users/user/code/cindy-website/pages/get-started.html"
  "/Users/user/code/cindy-website/pages/is-this-for-you.html"
  "/Users/user/code/cindy-website/pages/lets-talk.html"
  "/Users/user/code/cindy-website/pages/projects.html"
  "/Users/user/code/cindy-website/pages/writing-editing.html"
)

# Loop through each file and update the Services link to a span
for file in "${FILES[@]}"; do
  # Use sed to replace the Services link with a span
  sed -i '' 's|<a href="./services.html">Services</a>|<span class="dropdown-toggle">Services</span>|g' "$file"
done

echo "Navigation updated in all files."

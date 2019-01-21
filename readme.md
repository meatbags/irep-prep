# iRep + eDetail
A reference repository outlining the structure of an iRep eDetail.

# Packaging options (zipped folder)
1. Upload per slide - One slide.
2. Upload per key message - Multiple slides (covering one key message).
3. Upload per presentation - One entire presentation.

# Example Presentation
- Presentation (id = myPresentation)
  - Introduction <intro.zip>
    - assets/ (example folder name)
    - intro1.html
    - intro1-full.jpg (preview image)
    - intro1-thumb.jpg (thumbnail image)
  - Analysis <analysis.zip>
  - Conclusion <conc.zip>

# Example hyperlink
- Example jump to slide in presentation: `<a href="veeva:goToSlide(intro.zip, myPresentation)">link</a>`
- Or in js: `window.location = "veeva:goToSlide(intro.zip)";`
- Note: params are not quoted

# Navigation
## Default
- Swipe left/right to go to prev/next Key Message.
- Pinch for slides overview
- Slides button (top-left) for slides overview
- Arrow button (bottom-left) for Key Messages scroller

## Custom
- Jump to another slide `<a href='example1.html'></a>`
- Jump from zipfile to another zipfile `<a href='veeva:goToSlide(example1.zip)'></a>`
- Jump from presentation to presentation `<a href='veeva:goToSlide(my_presentation_v01.zip, my_presentation_v01)'></a>`

# Naming Conventions
## Images
- Image-full.jpg Image-thumb.jpg

// Custom jQuery logic to enhance gallery interaction
$(document).ready(function () {
  console.log("Document is ready. Initializing gallery...");

  // Log when an image is clicked
  $('a[data-lightbox="gallery"]').on('click', function () {
    let imgTitle = $(this).attr('data-title');
    console.log("Image clicked:", imgTitle);
  });

  // Log when Lightbox is closed (using event listener)
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fadeDuration': 300,
    'imageFadeDuration': 300,
    'onClose': function () {
      console.log("Lightbox closed");
    }
  });
});

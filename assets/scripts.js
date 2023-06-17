$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

const baseUrl = 'https://res.cloudinary.com/di897duch/image/upload';

$(document).ready(function() {
  const activeImage = document.querySelector('.carousel-item.active img');
  Array.from(document.querySelectorAll('img')).forEach((image) => {
    if (image.alt === "Logo instagram") {
      return;
    }
    if (
      image.alt ===
      "Photo de deux hommes dans un festival levant les bras" ||
      image.alt === "Photo d'un mariage où le marier embrasse la marier"
    ) {
      const { offsetWidth, offsetHeight } = activeImage;
      console.log(offsetWidth, offsetHeight);
      const pixelRatio = window.devicePixelRatio || 1.0;
      const imageParams = `w_${offsetWidth * pixelRatio},h_${offsetHeight * pixelRatio},c_fill,q_auto:eco,g_auto,f_auto`;
      const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`;
      image.src = url;
    } else {
      const { offsetWidth, offsetHeight } = image;
      console.log(offsetWidth, offsetHeight);
      if (offsetWidth == 0) {
        return
      }
      const pixelRatio = window.devicePixelRatio || 1.0;
      const imageParams = `w_${offsetWidth * pixelRatio},h_${offsetHeight * pixelRatio},q_auto:eco,c_fill,g_auto,f_auto`;
      const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`;
      image.src = url;
    }
  });
}
)

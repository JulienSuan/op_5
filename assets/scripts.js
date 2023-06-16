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

(() => {
    const baseUrl = 'https://res.cloudinary.com/di897duch/image/upload'
    console.log(baseUrl)
    Array.from(document.querySelectorAll('img')).forEach(image => {
        const { clientWidth, clientHeight } = image
        console.dir(image)
      const pixelRatio = window.devicePixelRatio || 1.0
      const imageParams = `w_${100 * Math.round(clientWidth * pixelRatio / 100)},h_${100 * Math.round(clientHeight * pixelRatio / 100)},c_fill,g_auto,f_auto`
      const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`
      image.src = url
    })
  })()
  

  window.addEventListener("resize", () => {
    if (window.innerWidth < 640) {
        
    }
  })
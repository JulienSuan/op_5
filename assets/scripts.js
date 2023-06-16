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


window.addEventListener('load', () => {
    const baseUrl = 'https://res.cloudinary.com/di897duch/image/upload'
    console.log(baseUrl)
    Array.from(document.querySelectorAll('img')).forEach(image => {
        if (image.alt == "Logo instagram") {
            return
        }
        const { offsetWidth, offsetHeight} = image
        if (offsetWidth && offsetHeight == 0) {
         const activeImage = document.querySelector('.carousel-item.active img');
        const { offsetWidth, offsetHeight} = activeImage
        const pixelRatio = window.devicePixelRatio || 1.0
        const imageParams = `w_${100 * Math.round(offsetWidth * pixelRatio / 100)},h_${100 * Math.round(offsetHeight * pixelRatio / 100)},c_fill,g_auto,f_auto`
        const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`
        image.src = url
        } else {
        const { offsetWidth, offsetHeight} = activeImage

            const pixelRatio = window.devicePixelRatio || 1.0
            const imageParams = `w_${100 * Math.round(offsetWidth * pixelRatio / 100)},h_${100 * Math.round(offsetHeight * pixelRatio / 100)},c_fill,g_auto,f_auto`
            const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`
            image.src = url
        }
       
    })
})

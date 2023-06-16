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
    const activeImage = document.querySelector('.carousel-item.active img');
    const width = activeImage.offsetWidth;
    const height = activeImage.offsetHeight;
    const carouselImages = document.querySelectorAll('.carousel-item:not(.active) img');
    Array.from(document.querySelectorAll('img')).forEach(image => {
        if (image.alt == "Logo instagram") {
            return
        }
        if (image.offsetHeight == 0 && image.offsetHeight == 0) {
            const { offsetWidth, offsetHeight} = activeImage
            console.log(offsetWidth, offsetHeight)
            const pixelRatio = window.devicePixelRatio || 1.0
            const imageParams = `w_${100 * Math.round(offsetWidth * pixelRatio / 100)},h_${100 * Math.round(offsetHeight * pixelRatio / 100)},c_fill,g_auto,f_auto`
            const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`
            image.src = url
        } else {
            const { offsetWidth, offsetHeight} = image
            console.log(offsetWidth, offsetHeight)
            const pixelRatio = window.devicePixelRatio || 1.0
            const imageParams = `w_${100 * Math.round(offsetWidth * pixelRatio / 100)},h_${100 * Math.round(offsetHeight * pixelRatio / 100)},c_fill,g_auto,f_auto`
            const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`
            image.src = url
        }
       
    })
})

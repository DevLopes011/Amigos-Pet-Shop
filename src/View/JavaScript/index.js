const carouselImages = document.querySelector('.carousel-images')
const totalImages = document.querySelectorAll('.carousel-images img').length
let currentIndex = 0

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`

}

setInterval(showNextImage, 9000)
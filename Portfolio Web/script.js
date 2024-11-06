let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-inner .item');
    const totalItems = items.length;
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const itemWidth = items[0].offsetWidth + 10; // width + margin

    // Calculate new index
    currentIndex += direction;

    // Handle wrap-around
    if (currentIndex < 0) {
        currentIndex = totalItems - 3; // Show last set of items
    } else if (currentIndex > totalItems - 3) {
        currentIndex = 0; // Reset to the beginning
    }

    // Move carousel
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

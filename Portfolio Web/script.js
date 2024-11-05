// ตัวแปรสำหรับติดตามตำแหน่งปัจจุบันของ carousel
let currentSlide = 0;

// ฟังก์ชันเลื่อนภาพ
function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-inner .item');
    const totalSlides = items.length;

    // อัปเดตตำแหน่งสไลด์
    currentSlide += direction;

    // ตรวจสอบขอบเขตการเลื่อนสไลด์ (วนกลับไปเริ่มใหม่ถ้าถึงขอบ)
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // เลื่อน carousel โดยใช้การแปลงตำแหน่ง
    carouselInner.style.transform = `translateX(${-currentSlide * 100}%)`;
}

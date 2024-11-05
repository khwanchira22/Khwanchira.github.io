// ตัวแปรสำหรับติดตามตำแหน่งปัจจุบันของ carousel
let currentSlide = 0;

// ฟังก์ชันเลื่อนภาพ
function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.item');
    const itemWidth = items[0].offsetWidth + 10; // รวมระยะ margin ระหว่าง items

    // อัปเดตตำแหน่งสไลด์
    currentSlide += direction;

    // ตรวจสอบขอบเขตการเลื่อนสไลด์
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > items.length - 1) {
        currentSlide = items.length - 1;
    }

    // เลื่อน carousel โดยใช้การแปลงตำแหน่ง
    carouselInner.style.transform = `translateX(${-currentSlide * itemWidth}px)`;
}

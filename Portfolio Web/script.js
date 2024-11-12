// สร้างตัวแปรเก็บตำแหน่งของ carousel แต่ละอัน
const carouselIndices = {
    'carousel1': 0,
    'carousel2': 0
};

function moveSlide(carouselId, direction) {
    // ดึง carousel ที่ต้องการเลื่อนโดยใช้ carouselId
    const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
    const items = document.querySelectorAll(`#${carouselId} .carousel-inner .item`);
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth + 30; // width + margin

    // อัพเดตตำแหน่ง index ของ carousel นั้นๆ
    carouselIndices[carouselId] += direction;

    // จัดการการเลื่อนแบบวนลูป
    if (carouselIndices[carouselId] < 0) {
        carouselIndices[carouselId] = totalItems - 1; // เลื่อนไปยังภาพสุดท้าย
    } else if (carouselIndices[carouselId] >= totalItems) {
        carouselIndices[carouselId] = 0; // กลับไปที่ภาพแรก
    }

    // เลื่อน carousel ไปยังตำแหน่งที่คำนวณได้
    carousel.style.transform = `translateX(-${carouselIndices[carouselId] * itemWidth}px)`;
}

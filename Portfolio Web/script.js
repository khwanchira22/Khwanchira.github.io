let currentSlide = 0;
const itemsToShow = 4; // จำนวนภาพที่แสดงในหน้าจอ
const itemWidth = 300; // ความกว้างของแต่ละภาพใน Carousel
const totalSlides = document.querySelectorAll('.carousel-inner .item').length;

function moveSlide(direction) {
    // เพิ่มค่า currentSlide ตาม direction (1 หรือ -1)
    currentSlide += direction;

    // ตรวจสอบหากไปเกินภาพสุดท้าย
    if (currentSlide > totalSlides - itemsToShow) {
        // หากถึงภาพสุดท้ายและคลิก Next อีกครั้ง ให้กลับไปที่ภาพแรก
        currentSlide = 0;
    } else if (currentSlide < 0) {
        // ถ้าไปเกินภาพแรกและคลิก Previous ให้ไปที่ภาพสุดท้าย
        currentSlide = totalSlides - itemsToShow;
    }

    // คำนวณ offset เพื่อเลื่อน Carousel
    const offset = -currentSlide * itemWidth;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
}

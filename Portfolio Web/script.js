let currentIndex = 0; // ตำแหน่งเริ่มต้นของภาพ

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-inner .item');
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth + 20; // ความกว้างของภาพรวม margin

    // ปรับตำแหน่งของ currentIndex ตาม direction
    currentIndex += direction;

    // จัดการการวนลูป
    if (currentIndex >= totalItems) {
        // ถ้า currentIndex เกินจำนวนภาพทั้งหมด ให้กลับไปที่รูปแรก
        currentIndex = 0;
    } else if (currentIndex < 1) {
        // ถ้า currentIndex น้อยกว่า 0 ให้กลับไปที่รูปสุดท้าย
        currentIndex = totalItems - 1;
    }

    // เปลี่ยนตำแหน่งของ carousel โดยเลื่อนในแนวนอนตาม currentIndex
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

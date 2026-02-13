// รอให้หน้าเว็บโหลดเสร็จก่อนทำงาน
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. จัดการฟอร์มติดต่อ (เมื่อกดปุ่มส่ง)
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // ป้องกันไม่ให้เว็บรีเฟรชหน้าจอตามปกติ
            event.preventDefault();

            // ดึงค่าจากฟอร์ม
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            // แสดงแจ้งเตือน (ในของจริงส่วนนี้จะส่งข้อมูลเข้า Server)
            if(name && message) {
                alert(`ขอบคุณครับคุณ ${name}!\nผมได้รับข้อความของคุณแล้ว: "${message}"\n(นี่เป็นระบบจำลองการส่ง)`);
                
                // เคลียร์ค่าในฟอร์ม
                contactForm.reset();
            } else {
                alert('กรุณากรอกข้อมูลให้ครบถ้วนครับ');
            }
        });
    }

    // 2. (Optional) Smooth Scroll สำหรับเมนู
    // โค้ดนี้ทำให้เวลาคลิกเมนูแล้วหน้าเว็บจะเลื่อนไปหาส่วนนั้นนิ่มๆ
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
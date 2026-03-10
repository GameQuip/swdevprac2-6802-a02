document.getElementById('adoption-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();
    const petCountStr = document.getElementById('pet-count').value;
    const isAcknowledged = document.getElementById('agreement').checked;

    if (fullName === "" || phoneNumber === "") {
        alert("กรุณากรอกชื่อ-นามสกุล และเบอร์ผู้ติดต่อ");
        event.preventDefault();
        return;
    }

    const petCount = Number(petCountStr);
    if (petCountStr === "" || isNaN(petCount) || petCount < 0 || petCount > 100) {
        alert("กรุณาใส่จำนวนสัตว์เลี้ยงเป็นตัวเลข ระหว่าง 0 - 100 เท่านั้น");
        event.preventDefault();
        return;
    }

    if(!isAcknowledged) {
        alert("กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข");
        event.preventDefault();
        return;
    }

    alert("ส่งแบบฟอร์มสำเร็จ!!");
})
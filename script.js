// Hàm mở sub-tab khi người dùng nhấn vào liên kết
function openSubTab(event, subTabId) {
    event.preventDefault();
    
    const subTabContents = document.getElementsByClassName('sub-tab-content');
    const subTabLinks = document.getElementsByClassName('sub-tab-link');

    // Ẩn tất cả các sub-tab
    for (let i = 0; i < subTabContents.length; i++) {
        subTabContents[i].style.display = 'none';
    }

    // Bỏ class 'active' cho tất cả các liên kết sub-tab
    for (let i = 0; i < subTabLinks.length; i++) {
        subTabLinks[i].classList.remove('active');
    }

    // Hiển thị sub-tab được chọn
    document.getElementById(subTabId).style.display = 'block';

    // Thêm class 'active' cho liên kết sub-tab được chọn
    event.target.classList.add('active');
}

// Mở sub-tab đầu tiên khi trang load
document.addEventListener('DOMContentLoaded', function() {
    const firstSubTabLink = document.querySelector('.sub-tab-link');
    if (firstSubTabLink) {
        firstSubTabLink.click();
    }
});

// Xử lý form thêm môn học trong Labs1
document.getElementById('subjectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const subjectName = document.getElementById('subjectName').value.trim();
    if (subjectName) {
        const subjectList = document.getElementById('subjects');
        const listItem = document.createElement('li');
        listItem.textContent = subjectName;
        subjectList.appendChild(listItem);

        // Xóa dữ liệu input sau khi thêm
        document.getElementById('subjectName').value = '';
    }
});

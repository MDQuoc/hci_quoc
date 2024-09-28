document.getElementById('subjectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const subjectName = document.getElementById('subjectName').value;
    if (subjectName) {
        const subjectList = document.getElementById('subjects');
        const listItem = document.createElement('li');
        listItem.textContent = subjectName;
        subjectList.appendChild(listItem);

        // Xóa dữ liệu input sau khi thêm
        document.getElementById('subjectName').value = '';
    }
});

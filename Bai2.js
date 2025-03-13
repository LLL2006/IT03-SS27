let arrStudent = [];
let choice;

let addStudent = () => {
  let n = +prompt("Nhập số lượng sinh viên");

  for (let i = 0; i < n; i++) {
    let student = prompt(`Nhập họ tên sinh viên thứ ${i + 1}`);
    arrStudent.push(student);
  }
};

let printStudent = () => {
  if (arrStudent.length === 0) {
    alert("Danh sách sinh viên trống");
  } else {
    alert(`Danh sách sinh viên:\n${arrStudent.join("\n")}`);
  }
};

let searchStudent = () => {
    if (arrStudent.length === 0) {
        alert("Danh sách sinh viên trống!");
        return;
      }
    let searchName = prompt("Nhập tên sinh viên cần tìm");
    let found = arrStudent.filter(student => student.includes(searchName));
    if(found.length === 0){
        alert("Sinh viên không có trong danh sách")
    }else{
        alert(`${found}`)
    }
}

let deleteStudent = () => {
    if (arrStudent.length === 0) {
        alert("Danh sách sinh viên trống!");
        return;
      }
    let deleteName = prompt("Nhập tên sinh viên cần xóa")
    let index = arrStudent.indexOf(deleteName);

    if(index !== 1){
        arrStudent.splice(index, 1);
        alert("Đã xóa thành công")
    } else{
        alert("Sinh viên không có trong danh sách")
    }
}

do {
  choice = +prompt(`
          1. Nhập danh sách sinh viên.
          2. Hiển thị danh sách sinh viên.
          3. Tìm sinh viên theo tên.
          4. Xóa sinh viên khỏi danh sách.
          5. Thoát.
          Lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      addStudent();
      break;
    case 2:
      printStudent();
      break;
    case 3:
        searchStudent();
        break;
    case 4:
        deleteStudent();
        break;
    case 5:
        alert("Thoát chương trình")
        break;
    default:
        alert("Vui lòng nhập lại")
  }
} while (choice !== 5);

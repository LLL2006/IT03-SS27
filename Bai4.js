let choice;
let numbers = [];

let addNumbers = () => {
    let n = +prompt("Nhập số nguyên của mảng")
    for (let i = 0; i < n; i++) {
        let number = +prompt(`Nhập số nguyên thứ ${i + 1}`);
        numbers.push(number);
    }
}

let Average = () => {
    if (numbers.length === 0) {
        alert("Danh sách rỗng! Hãy nhập danh sách trước.");
        return;
      }

    let sum = numbers.reduce((a, b) => a + b, 0);
    let average = sum / numbers.length;
    alert(`Trung bình các số là ${average}`)
}

let maxEven = () => {
    let evenNumbers = numbers.filter(num => num % 2 === 0);
  if (evenNumbers.length === 0) {
    alert("Không có số chẵn trong danh sách");
  } else {
    let maxEven = Math.max(...evenNumbers);
    alert(`Số chẵn lớn nhất là: ${maxEven}`);
  }
}

let minOdd = () => {
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
  if (oddNumbers.length === 0) {
    alert("Không có số lẻ trong danh sách");
  } else {
    let minOdd = Math.min(...oddNumbers);
    alert(`Số lẻ nhỏ nhất là: ${minOdd}`);
  }
}

do {
    choice = +prompt(`
            1. Nhập danh sách số nguyên.
            2. Tính trung bình các số.
            3. Tìm số chẵn lớn nhất.
            4. Tìm số lẻ nhỏ nhất.
            5. Thoát.
            Lựa chọn của bạn: `);
    switch (choice) {
      case 1:
        addNumbers();
        break;
      case 2:
        Average();
        break;
      case 3:
          maxEven();
          break;
      case 4:
          minOdd();
          break;
      case 5:
          alert("Thoát chương trình")
          break;
      default:
          alert("Vui lòng nhập lại")
    }
  } while (choice !== 5);
  
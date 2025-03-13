let add = (a, b) => {
  return a + b;
};

let minus = (a, b) => {
  return a - b;
};

let core = (a, b) => {
  return a * b;
};

let devide = (a, b) => {
    if(b === 0){
        alert("Không thể chia cho 0");
        return "Lỗi";
    }
  return a / b;
};

let input = () => {
  let a = +prompt("Nhập số thứ nhất");
  let b = +prompt("Nhập số thứ hai");
  return [a, b];
};

let choice;
let result;

do {
  choice = +prompt(`
        1. Cộng hai số
        2. Trừ hai số
        3. Nhân hai số
        4. Chia hai số
        5. Thoát.
        Lựa chọn của bạn: `);
  if (choice >= 1 && choice <= 4) {
    let [a, b] = input();

    switch (choice) {
        case 1:
          result = add(a, b);
          break;
        case 2:
          result = minus(a, b);
          break;
        case 3:
          result = core(a, b);
          break;
        case 4:
          result = devide(a, b);
          break;
        case 5:
          alert("Thoát chương trình")
          break;
        default:
            alert("Vui lòng chọn lại")
      }

      alert(`${result}`);
  }
  
} while (choice !== 5);

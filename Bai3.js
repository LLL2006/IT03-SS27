let choice;

let areaCircle = (radius) => Math.PI * radius * radius;

let perimeterCircle = (radius) => Math.PI * 2 * radius;

let areaRectangle = (width, height) => width * height;

let perimeterRectangle = (width, height) => 2* (width + height);

do {
    choice = +prompt(`
            1. Tính diện tích hình tròn.
            2. Tính chu vi hình tròn.
            3. Tính diện tích hình chữ nhật.
            4. Tính chu vi hình chữ nhật.
            5. Thoát.
            Lựa chọn của bạn: `);
    switch (choice) {
      case 1:
        let radius1 = +prompt("Nhập bán kính hình tròn:");
        alert(`Diện tích hình tròn là ${areaCircle(radius1)}`)
        break;
      case 2:
      let radius2 = +prompt("Nhập bán kính hình tròn:");
        alert(`Chu vi hình tròn là ${perimeterCircle(radius2)}`)
        break;
      case 3:
      let width1 = +prompt("Nhập chiều rộng hình chữ nhật");
      let height1 = +prompt("Nhập chiều dài hình chữ nhật");
      alert(`Diện tích hình chữ nhật là ${areaRectangle(width1, height1)}`)
          break;
      case 4:
        let width2 = +prompt("Nhập chiều rộng hình chữ nhật");
        let height2 = +prompt("Nhập chiều dài hình chữ nhật");
        alert(`Chu vi hình chữ nhật là ${perimeterRectangle(width2, height2)}`)
          break;
      case 5:
          alert("Thoát chương trình")
          break;
      default:
          alert("Vui lòng nhập lại")
    }
  } while (choice !== 5);
  
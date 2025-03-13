let maxNumber = (num) => {
    if (!Number.isInteger(num)) {
        return "Dữ liệu không hợp lệ";
    }

    let numStr = num.toString();
    
    let digitsArray = numStr.split('');

    digitsArray.sort((a, b) => b - a);

    let sortedNumberStr = digitsArray.join('');

    return parseInt(sortedNumberStr, 10);
}

console.log(maxNumber(2941));
console.log(maxNumber(3875));
console.log(maxNumber("1h8t"));



let missNumber = (arr) => {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "Dữ liệu không hợp lệ";
    }

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let expectedSum = ((min + max) * (max - min + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

console.log(missNumber([1,2,3,5]));
console.log(missNumber([1,2,4,5]));
console.log(missNumber("abc"));

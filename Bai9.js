let sortEvenNumber = (arr) => {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    
    let index = 0;

    return arr.map(num => num % 2 === 0 ? evenNumbers[index++] : num);
}

console.log(sortEvenNumber([5, 8, 6, 3, 4, 2, 7])); 

console.log(sortEvenNumber([5, 9, 6, 4, 1, 8, 3])); 

console.log(sortEvenNumber("abc")); 
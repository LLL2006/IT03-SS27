let arithmeticProgression = (arr) => {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "Dữ liệu không hợp lệ";
    }

    let d = arr[1] - arr[0];

    for(let i = 2; i < arr.length; i++) {
        if(arr[i] - arr[i - 1] !== d){
            return FALSE;
        }
    }

    return TRUE;
}

console.log(arithmeticProgression([2, 4, 6, 8])); 
console.log(arithmeticProgression([3, 6, 9, 12, 14]));            
console.log(arithmeticProgression("abc")); 
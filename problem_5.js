function removeDuplicates(arr) {
    let uniqueSet = new Set(arr);
    
    let uniqueArray = [...uniqueSet];
    
    return uniqueArray;
}

let inputArr = [1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(inputArr)); 
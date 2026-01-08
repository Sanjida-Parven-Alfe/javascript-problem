function reverseString(str) {
    const charArray = str.split('');  
    const reversedArray = charArray.reverse(); 
    const finalResult = reversedArray.join(''); 
    return finalResult;
}
console.log(reverseString("hello")); 
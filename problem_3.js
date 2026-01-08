function isPalindrome(str) {
    let cleanStr = str.toLowerCase();
    
    let reversedStr = cleanStr.split('').reverse().join('');
    
    if (cleanStr === reversedStr) {
        return true;
    } 
    else {
        return false;
    }
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
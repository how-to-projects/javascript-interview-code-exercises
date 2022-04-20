class Palindrome {
    constructor() {}

    isPalindrome = (val, isString = false) => {
     
     /** Can simplify this, but exploding it for clarity */  
     
     /** split string or words into an array */
     const arr = isString ? val.split('') : val.split(' ');
     const reverse = arr.reverse();
     const join = isString ? reverse.join('') : reverse.join(' ');

     return val === join;
    }
}

const palindrome = new Palindrome();
const term = 'tac o cat';
console.log(
        `Is ${term} a palindrome:`, 
        palindrome.isPalindrome(term, true)
    );
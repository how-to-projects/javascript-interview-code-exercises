/**
 * Write a JavaScript function that generates all combinations of a string.
 * Example string: 'dog'
 * Expected Output: d,o,do,g,dg,og,dog
 */

const substrings = (str) => {
    str = str.replace(' ', '');
    let array1 = [];

    for (let x = 0, y = 0; x < str.length; x++, y++) {
        array1[x] = str.substr(x, y); 
    }

    let combi = [];
    let temp= "";
    let slent = Math.pow(2, array1.length);
}

// console.log(substrings('dog'));
const sortStr = 'webmaster';
console.log('sort', sortStr.split('').sort().join(''));



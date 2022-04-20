// const upper = 'the big brown cow';
// const s = upper.split(' ')
//             .map((itm, idx, arr) => {
//                 let s = itm.split('');
//                 s[0] = s[0].toUpperCase();
//                 return s.join('');
//             });
//      console.log(s.join(' '));

const toUpperSimplified = (words) => {
    /** Create an array of words */
    return words.split(' ')
    /** Use map to transform each item in the array */
    .map(itm => {
        /** .charAt(0) - get first character in itm and uppercase it,
         * then, .slice(1) - from index one to the end of itm, append
         * the remaining characters back on
         */
        return itm.charAt(0).toUpperCase() + itm.slice(1);
        /** join the array back to a string, preserving the spaces */
    }).join(' ')
}

console.log('to uppercase', toUpperSimplified('the big brown cowsss'));
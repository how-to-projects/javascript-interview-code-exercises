const numberOfVowels = (str) => {

    const chars = str.split('');
    const regEx = new RegExp('[aeiou]', 'g');

    /** Return an array of all vowels */
    const vowels = chars.filter(itm => {
        /** if the itm matches the pattern
         * it is a vowel
         */
        return itm.match(regEx);
    });

    /** Return all vowels found */
    return vowels;
    /** Return only unique vowels, no duplicates */
    // return new Set([...vowels]);
   
    /** Return the number of vowels */
    // return str.match(regEx).length;
}

console.log(numberOfVowels('the quick brown cow came'));
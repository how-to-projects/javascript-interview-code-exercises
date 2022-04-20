const longestWord = (words) => {
    /** Create an array of words */
    const arr = words.split(' ');

    /** use sort and a compare function to reorder
     * the array in descending order
     */
    arr.sort((a, b) => {
        return b.length - a.length;
    });

    /** Because of the sort and compare function, we know
     * that index zero in arr is the longest word
     */
    return arr[0];
}

const upperCase = (term) => {
    const words = term.split('');
    const reExp = new RegExp('[aeiou]', 'g');

    const m = words.filter(itm => {
        return itm.match(reExp);
    })

    console.log(m);
}

console.log(upperCase('the quick brown cow jumped'));


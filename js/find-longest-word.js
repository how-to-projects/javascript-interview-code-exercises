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

console.log(longestWord('the quick brown cow jumped'));
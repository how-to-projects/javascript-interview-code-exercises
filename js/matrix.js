/**
 * Return n rows by n columns identity
 */

const matrix = (n) => {

    let x;
    let y;
    
    /** There's a better way to do this (avoid nested loops), 
     * but for time I'm leaving as is */
    for(x = 0; x < n; x++) {
        for(y = 0; y < n; y++) {
            x === y ? console.log('1') : console.log('0');
        }
        console.log('-----------');
    }
}

console.log(matrix(4));
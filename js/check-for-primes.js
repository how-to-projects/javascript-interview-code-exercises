const findPrimes = (nums) => {
    
    /** Filter out any numbers that aren't prime */
    return nums.filter((itm, idx, arr) => {

        /** Prime can't be zero, so ignore zero */
        if (itm > 0) {
            /** two is a prime, so let's grab that one
             * 
             * if a number is divisible by two and
             * has a remainder of zero, it's not a prime
             * 
             * use the modulo operator to test if:
             *      itm divided by two is not equal to zero, these are the prime numbers 
             */
            return itm === 2 || itm % 2 !== 0;
        }
    })
}

/** A loop just to make things easier to test */
const nums = () => {

    const numArr = [];

    for(let i = 0; i < 22; i++) {
        numArr[i] = i;
    }

    return numArr;

}

console.log('Prime numbers:', findPrimes(nums()));
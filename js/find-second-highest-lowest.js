/**
 * Import Loops module for funsies
 */
import Loops from './classes/loops.class.js';

/**
 * Find second highest and lowest numbers from list 
 */

const findSecondBest = (nums) => {

    console.log(nums);
    /** sort array in descending order */
    const reorderArray = nums.sort((a, b) => {
        return b - a;
    })

    return `second highest number: ${reorderArray[1]}\nsecond lowest number: ${reorderArray[reorderArray.length - 2]}`;
}

console.log(findSecondBest(Loops.arrayOfNums(21, true)));
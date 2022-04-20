class Loops {
    
    /**
     * 
     * @param {*} length length you want the array to be
     * @param {*} shuffle randomize array item placement
     * @returns array of numbers
     */
    static arrayOfNums = (length, shuffle = false) => {

        const numArr = [];

        for(let i = 0; i < length; i++) {
            numArr[i] = i;
        }

        if (!shuffle) {
            return numArr;
        }

        /** Not the best way, seems this is flawed, but
         * for this test, whatever
         * 
         * TODO: take a look at Fisher-Yates algorithm
         *       for a more robost approach
         */
        return numArr.sort((a, b) => {
            return 0.5 - Math.random();
        })
        
    }
}

export default Loops;
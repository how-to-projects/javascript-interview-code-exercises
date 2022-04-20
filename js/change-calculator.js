
class Change {

    constructor(){
    }

    calculator(a, b) {
        let change = {};
        let returnValue = a-b;
        const coinTypes = ['twenty','ten','five', 'twoDollar', 'dollar', 'quarter', 'dime', 'nickle', 'penny'];
        const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
        let amount;

        for(let i = 0; i < coinValues.length; i++) {
            amount = Math.floor(returnValue / coinValues[i]);
            if (amount > 0) {
                change[coinTypes[i]] = amount;
                returnValue = returnValue % coinValues[i];
            }
        }

        return change;
    }

    calculatorSimpler(cash, price, denoms) {
        let change = {};
        let returnValue = cash - price;
        let amount;

        denoms.forEach(itm => {
            /** Math.floor() rounds down to the nearest integer */
            /** Check how many times returnValue goes into each of the denoms
             * - we are only intersted in values greater than one
            */
            amount = Math.floor(returnValue / itm);
            if(amount > 0) {
                /** set the key / value of change */
                change[itm] = amount;

                /**  */
                debugger;
                /** Get the remainder of returnValue / itm and update returnValue,
                 * so we are subtracting what we already figured out from the original
                 * returnValue unitl we get down to zero
                 * 
                 * e.g. 327 % 200 = 127 (200 goes into 327 one time, with 127 left over
                 *      401 % 200 = 1   (200 goes into 401 twice, with one left over)
                 */
                returnValue = returnValue % itm;
            }
        });

        return change;
    }
}

const change = new Change();
const cash = 500;
const price = 173;
const denoms = [200, 100, 50, 25, 20, 10, 5, 1];
console.log('simpler', change.calculatorSimpler(cash, price, denoms));
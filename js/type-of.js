/**
 * Check data types of given items
 * 
 * @param  types array of items
 * @returns list of datatypes
 */

const dataTypes = (types) => {

    return types.map((itm, idx, arr) => {
        return `${ itm } is a type of: ${ typeof itm }`
    })
}

/** this variable doesn't have a values,
 * so JavaScript assigns the default value of 'undefined,'
 * which is a type of 'undefined' */
let undefinedVar;
const types = [{}, ()=>{}, 1, 'one', true, undefinedVar];

console.log(dataTypes(types));
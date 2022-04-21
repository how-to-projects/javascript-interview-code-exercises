const examples = [
  '{}', // valid, to act as a starting point
  '{[]}', // valid
  '{[]}', // valid
  '{[(])}', // NOT valid (parenthesis and brackets are "intersecting")
  '{[}',  // NOT valid (opening bracket is not closed)
  '{([]}', //  NOT valid (ignore escape characters & string literals)
  '{]}', // NOT valid (extra closing bracket)
];

//   console.log("Howdy, Shannon");

function nameMe(inputString) {

  /** Storage for the charcters we are checking */
  let stack = [];

  /** Key/Values for open and closing brackets we're checking */
  const matchLookup = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  /** Keys of matchLookup */
  const matchKeys = Object.keys(matchLookup);

  /** Values of matchLookup */
  const matchValues = Object.values(matchLookup);

  /**
   * Create an array from inputString and loop
   * over each character
   */
  inputString.split('').forEach((char) => {

    /** 
     * If char matches one of the items in
     * matchKeys, then add char to the
     * stack array
    */
    if (matchKeys.includes(char)) {
      stack.push(char);
    }

    /** 
     * If char matches one of the items in 
     * matchValues, then we want to remove
     * the associated opening bracket
     * for the stack array
    */
    else if (matchValues.includes(char)) {

      /** Remove last item from stack array */
      const lastBracket = stack.pop();

      debugger
      /** 
       * Check the key value in matchLookup and see if it matches char,
       * if it doesn't match, then we know things don't match,
       * so stop checking and return false
       * 
       * lastBracket represents a key inside the matchLookup object
       * matchLookup[lastBracket]: returns the value for of said key
       */
      if (matchLookup[lastBracket] !== char) {

        return false;
      }
    }
  });

  /**
   * At this point, if stack has any values 
   * left inside of it, then we know something 
   * didn't match, so return false
   */
  return stack.length === 0;
}

console.log(nameMe('{[()]}'));
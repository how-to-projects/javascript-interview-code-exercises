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
    let stack = [];
    let current;
    const matchLookup = {
          "(": ")", 
          "[": "]", 
          "{": "}", 
        };
                      
    for (let i = 0; i < inputString.length; i++) {
      current = inputString[i]; //easier than writing it over and over
      
      if (current === '(' || current === '[' || current === "{") {
        stack.push(current);
        
      } else if (current === ')' || current === ']' || current === "}") {
        const lastBracket = stack.pop();
      
        if (matchLookup[lastBracket] !== current) { //if the stack is empty, .pop() returns undefined, so this expression is still correct
        
          return false; //terminate immediately - no need to continue scanning the string
        }
      }
    }
    
    return stack.length === 0; //any elements mean brackets left open
}
  
  console.log(nameMe('{[()]}'));
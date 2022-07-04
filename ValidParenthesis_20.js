/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true

*/

var isValid = functions(s){
    const stack = [];
    const parens = '() {} []';
    let i = 0;

    while(i < s.length) {
        stack.push(s[i]);
        i++;

        let open = stack[stack.length - 2];
        let closed = stack[stack.length -1];

        let potParens = open + closed;

        if(parens.includes(potParens)) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
};
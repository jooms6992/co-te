'use strict';

const s = '{(([]))[]}';

function isValid(s) {
  const stack = [];
  for (let p of s) {
    if (p === '(') {
      stack.push(')');
    } else if (p === '{') {
      stack.push('}');
    } else if (p === '[') {
      stack.push(']');
    } else if (stack.pop() !== p) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValid(s));

'use strict';
const words = ['4', 'las', 'god', 'psala', 'sal'];

function solution(words) {
  const memo = new Map();
  for (let i = 1; i <= words[0]; i++) {
    memo.set(words[i]);
    let reversed = words[i].split('').reverse().join('');
    if (memo.has(reversed)) {
      let len = words[i].length;
      let mid = words[i].split('')[Math.floor(words[i].length / 2)];
      return [len, mid];
    }
  }
}

console.log(solution(words));

//  https://leetcode.com/problems/daily-temperatures/
'use strict';

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

function dailyTemperatures(temperatures) {
  const answer = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    let [cur_day, cur_temp] = [i, temperatures[i]];
    while (stack.length > 0 && stack[stack.length - 1][1] < cur_temp) {
      let [prev_day, _] = stack.pop();
      answer[prev_day] = cur_day - prev_day;
    }
    stack.push([cur_day, cur_temp]);
  }
  return answer;
}

console.log(dailyTemperatures(temperatures));

//school.programmers.co.kr/learn/courses/30/lessons/131705

https: function solution(number) {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < number.length; i++) {
    map.set(i, number[i]);
  }
  for (let i = 0; i < number.length - 1; i++) {
    let newMap = new Map(map.entries());
    for (let j = i + 1; j < number.length; j++) {
      let newArr = [...number];
      let target = -(newArr[i] + newArr[j]);
      // let target = -(newArr.splice(i,1,true)[0] + newArr.splice(j,1,true)[0])
      newMap.set(i, true);
      newMap.set(j, true);
      for (let v of newMap.values()) {
        if (target === v) {
          count++;
        }
      }
    }
    map.set(i, true);
    number[i] = true;
  }
  return count;
}

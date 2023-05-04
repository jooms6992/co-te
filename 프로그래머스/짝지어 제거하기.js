https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
    let sArr = [...s]
    const stack = []
    for(let i = 0; i<sArr.length; i++) {
        if(stack.length > 0 && stack[stack.length-1] === sArr[i]) {
            stack.pop()
        } else {
            stack.push(sArr[i])
        }
    }
    return stack.length === 0 ? 1 : 0
}
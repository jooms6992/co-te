/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // 해쉬 Map
    let result = []
    const map = new Map()
    for(let n of nums1) {
        map.set(n, (map.get(n) || 0) + 1)
    }
    for(let n of nums2) {
        if(map.has(n) && map.get(n) > 0) {
            result.push(n)
            map.set(n, map.get(n) - 1)
        }
    }
    return result

    // 해쉬 객체
    const memo = {}
    for(let i of nums1) {
        memo[i] = memo[i] ? memo[i] + 1 : 1
    }
    for(let i of nums2) {
        if(memo[i]) {
            result.push(i)
            memo[i]--
        }
    }
    return result

    // 처음에 내가 해본 방법
    const map1 = new Map()
    const map2 = new Map()
    for(let i = 0; i < nums1.length; i++) {
        map1.set(nums1[i],(map1.get(nums1[i]) || 0) + 1)
    }
    for(let i = 0; i < nums2.length; i++) {
        map2.set(nums2[i],(map2.get(nums2[i]) || 0) + 1)
    }
    for(let [k, v] of map1) {
        if(map2.has(k)) {
            // 같은 key를 가진 value의 최소값 만큼 반복되는게끔
            result = result.concat(Array.from({length : Math.min(v, map2.get(k))} , () => k))
            // result = result.concat(Array(Math.min(v, map2.get(k))).fill(k))
        }
    }
   return result
};
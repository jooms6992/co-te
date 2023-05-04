/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = []
    // const sorted = []
    const map = new Map()
    // sort alphabetically
    for(let i = 0; i < strs.length; i++) {
        // sorted.push(strs[i].split('').sort().join(''))
        let sorted = (strs[i].split('').sort().join(''))
        map.set(sorted, (map.get(sorted) ? [ ...map.get(sorted), strs[i] ] : [strs[i]]))

    }
    // // key: sorted, value: [...original]
    // for(let i = 0; i < sorted.length; i++) {
    //     map.set(sorted[i], (map.get(sorted[i]) ? [ ...map.get(sorted[i]), strs[i] ] : [strs[i]]))
    // }

    for(let v of map.values()) {
        result.push(v)
    }
    // return [...map.values()]
    return result
};
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let result = 0
    const map = new Map()
    for(let i = 0; i < stones.length; i++) {
        map.set(stones[i], ((map.get(stones[i]) || 0) + 1))
    }
    for(let j = 0; j < jewels.length; j++) {
        result += map.get(jewels[j]) || 0
    }
    return result
};
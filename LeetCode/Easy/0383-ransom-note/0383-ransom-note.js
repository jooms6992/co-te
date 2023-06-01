/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {}
    for(let letter of magazine) {
        if(!map[letter]) {
            map[letter] = 0
        }
        map[letter]++
    }

    for(let letter of ransomNote) {
        if(!map[letter]) {
            return false
        }
        map[letter]--
    }
    return true;



    const memo = new Map()
    for(let i = 0; i < magazine.length; i++) {
        memo.set(magazine[i], (memo.get(magazine[i]) || 0) + 1)
    }
    for(let i = 0; i < ransomNote.length; i++) {
        if(!memo.get(ransomNote[i])) {
            return false
        } else {
            memo.set(ransomNote[i], memo.get(ransomNote[i]) - 1)
        }
    }
    return true
};
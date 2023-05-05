/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 3가지 조건을 만족해야 함
    // 1.가로 2.세로 3.네모 // 중복x
    // [row][col] 0~8 
    
    for(let i = 0; i < board.length; i++) {
        let mapCol = new Map()
        let mapRow = new Map()
        for(let j = 0; j < board.length; j++) {
        // 1. 고정된 row
            if(mapRow.has(board[i][j])) {
                return false
            }
            if(board[i][j] !== '.') {
                mapRow.set(board[i][j])
            }
        // 2. 고정된 col
            if(mapCol.has(board[j][i])) {
                    return false
                }
            if(board[j][i] !== '.') {
                mapCol.set(board[j][i])
            }
        }
    }
    const directions = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]]
    // 3. 네모네모
    for(let i = 1; i < 9; i = i+3) {
        for(let j = 1; j < 9; j=j+3) {
            let mapSquare = new Map()
            for(let [row, col] of directions) {
                if(mapSquare.has(board[i+row][j+col])) {
                    return false
                }
                if(board[i+row][j+col] !== '.') {
                    mapSquare.set(board[i+row][j+col])
                }
            }
        }
    }
    return true
};




function helper(row, col, board,xd,yd,len) {
    // Invalid position
    if(row==xd && col==yd)
    {
        return len+1
    }
    if (
        row < 0 ||
        col < 0 ||
        row >= board.length ||
        col >= board[0].length ||
        board[row][col] === 0
    ) {
        return -1;
    }

    // Collect current gold
    let gold = board[row][col];

    // Mark visited
    board[row][col] = 0;

    // Try all 4 directions
    let left = helper(row, col - 1, board,xd,yd,len+1);
    let right = helper(row, col + 1,board,xd,yd, len+1);  
    let up = helper(row - 1, col, board,xd,yd,len+1);
    let down = helper(row + 1, col,board,xd,yd, len+1);

    // Restore cell
    board[row][col] = gold;

    return Math.max(up, down, left, right);
}

var longestpossibleRoute = function (matrix,xs,ys,xd,yd) {
    return helper(xs,ys,matrix,xd,yd,0);
};

console.log(
    longestpossibleRoute([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 0, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],0,0,1,7)
);
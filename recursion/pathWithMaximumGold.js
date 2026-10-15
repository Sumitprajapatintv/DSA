function helper(row, col, board) {
    // Invalid position
    if (
        row < 0 ||
        col < 0 ||
        row >= board.length ||
        col >= board[0].length ||
        board[row][col] === 0
    ) {
        return 0;
    }

    // Collect current gold
    let gold = board[row][col];

    // Mark visited
    board[row][col] = 0;

    // Try all 4 directions
    let up = helper(row - 1, col, board);
    let down = helper(row + 1, col, board);
    let left = helper(row, col - 1, board);
    let right = helper(row, col + 1, board);

    // Restore cell
    board[row][col] = gold;

    return gold + Math.max(up, down, left, right);
}

var getMaximumGold = function (grid) {
    let ans = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {

            if (grid[i][j] !== 0) {
                ans = Math.max(ans, helper(i, j, grid));
            }

        }
    }

    return ans;
};

console.log(
    getMaximumGold([
        [0, 6, 0],
        [5, 8, 7],
        [0, 9, 0],
    ])
);
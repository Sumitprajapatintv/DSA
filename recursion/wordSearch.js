function helpher(row,col,board,word,index)
{
    if(index==word.length)
    {
        return true
    }

    if(row<0 || col <0 || row>=board.length || col >=board[0].length)
    {
        return false
    }
    if(board[row][col]!=word[index])
    {
        return false
    }
    let temp=board[row][col]
    board[row][col]='#'
    let found=helpher(row-1,col,board,word,index+1) ||
    helpher(row,col-1,board,word,index+1) || 
    helpher(row+1,col,board,word,index+1) ||
    helpher(row,col+1,board,word,index+1) 

      board[row][col]=temp
      return found
}
var exist = function(board, word) {
    let row=board.length;
    let col=board[0].length;
    for(let i=0;i<row;i++)
    {
        for(let j=0;j<col;j++)
        {
            if(helpher(i,j,board,word,0))
            {
                return true
            }
        }
    }
    return false
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))
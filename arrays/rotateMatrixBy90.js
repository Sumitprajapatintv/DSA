// Example 1:

// Input: [[1,2,3],[4,5,6],[7,8,9]]

// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix.

// Example 2:

// Input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

// Output:[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix

// 1 2 3
// 4 5 6
// 7 8 9

// 7 4 1
// 8 5 2
// 9 6 3

//  1 4  7
//  2 5 8 
//  3 6 9

// 7 4 1 
// 6 5 2 
// 7 8 9

// 00 01 02
// 10 11 12
// 20 21 23

// nums[i][j]==nums[j]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// 1 2 3 
// 4 5 6
// 7 8 9

// 7 4 1 
// 8 5 2 
// 9 6 3


function rotatematrix(nums) {
    let rows = nums.length;
    let cols = nums[0].length;

    for(let i=0;i<rows;i++)
    {
        for(let j=i;j<cols;j++)
        {
            let temp=nums[i][j];
            nums[i][j]=nums[j][i]
            nums[j][i]=temp
        }
    }
    for(let i=0;i<rows;i++)
    {
        nums[i].reverse();
    }
    return nums;
}

function swap(nums,i,j)
{
    let temp=i;
    i=j;
    j=temp
}
console.log(rotatematrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
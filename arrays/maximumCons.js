// 485. Max Consecutive Ones
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

function maxCount(nums)
{
    let j=0;
    let count=0
    let maxCount=0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]==1)
        {
            count++;
        }
        else{
            count=0
        }
        maxCount=Math.max(count,maxCount)
    }
    return maxCount;
}

console.log(maxCount([1,1,0,1,1,1]))
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105
 
// Accepted
// 5,373,543/14.1M
// Acceptance Rate
// 38.1%
// Topics
// icon
// Companies
// Hint 1
// Hint 2
// Hint 3
// Similar Questions

function threesum(nums)
{
    let ans=[];
    
    for(let i=0;i<nums.length;i++)
    {
       
        for(let j=i+1;j<nums.length;j++)
        {
            for(let k=j+1;k<nums.length   ;k++)
            {
                if(i != j  && i != k  && j != k && nums[i]+nums[j]+nums[k]==0)
                {
                    ans.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    return ans;
}

console.log(threesum([-1,0,1,2,-1,-4]))
// Input: nums = [-1,0,1,2,-1,-4]


// -1 0 1 =0
// -1 0 2 =-1
// -1 0 -1 =0
// -1 0 -4=-5
// Problem Statement: Given an integer array nums of size n. Return all elements which appear more than n/3 times in the array. The output can be returned in any order.

// Examples
// Example 1:  
// Input: nums = [1, 2, 1, 1, 3, 2]  
// Output: [1]  
// Explanation: Here, n / 3 = 6 / 3 = 2.  
// Therefore, the elements appearing 3 or more times are: [1].

// Example 2:  
// Input: nums = [1, 2, 1, 1, 3, 2, 2]  
// Output: [1, 2]  
// Explanation: Here, n / 3 = 7 / 3 = 2.  
// Therefore, the elements appearing 3 or more times are: [1, 2].



function getMajorityElement(nums)
{
    const n=Math.floor(nums.length/3);
    let mp=new Map()
    for(let i=0;i<nums.length;i++)
    {
        mp.set(nums[i],(mp.get(nums[i])||0)+1)
    }
    let ans=[];
    console.log(mp)
    for([key,value] of mp)
    {
        if(value>n)
        {
            ans.push(key)
        }
    }
    return ans
}

console.log(getMajorityElement([1, 2, 1, 1, 3, 2, 2]))
let count=0;
let j=0;
for(let i=0;i<nums.length;i++)
{

}
1 1 1 2 2 2 3 

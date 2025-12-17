// Kth Missing Positive Number

// Mark as Completed

// 150


// Problem Statement: You are given a strictly increasing array ‘vec’ and a positive integer 'k'. 
// Find the 'kth' positive integer missing from 'vec'.

// Examples
// Example 1:
// Input Format: vec[]={4,7,9,10}, k = 1
// Result: 1
// Explanation: The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 1, the first missing element is 1.

// Example 2:
// Input Format: vec[]={4,7,9,10}, k = 4
// Result: 5
// Explanation: The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 4, the fourth missing element is 5.


function findAns(nums,k)
{
   for(let i=0;i<nums.length;i++)
   {
    if(nums[i]<=k)
    {
        k++;
    }
   }
   return k
}
console.log(findAns([4,7,9,10],4))
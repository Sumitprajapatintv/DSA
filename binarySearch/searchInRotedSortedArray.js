// Search Element in a Rotated Sorted Array

// Mark as Completed

// 359


// Problem Statement: Given an integer array nums,
//  sorted in ascending order (with distinct values) and a target value k.
//  The array is rotated at some pivot point that is unknown.
//  Find the index at which k is present and if k is not present return -1.

// Examples
// Input:nums = [4, 5, 6, 7, 0, 1, 2], k = 0
// Output :4
// Explanation : Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array.

// Input: nums = [4, 5, 6, 7, 0, 1, 2], k = 3
// Output :-1
// Explanation :Here, the target is 3. Since 3 is not present in the given rotated sorted array. Thus, we get the output as -1.
//Brute Force
// var searchinRotedSortedArray=function(nums,k)
// {
//     for(let i=0;i<nums.length;i++)
//     {
//         if(nums[i]==k)
//         {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(searchinRotedSortedArray([4, 5, 6, 7, 0, 1, 2],0))

var searchinRotedSortedArray=function(nums,k)
{
     let start=0;let end=nums.length-1;
     while(start<=end)
     {
        let mid=Math.floor((start+end)/2)
        if(k==nums[mid])
        {
            return mid
        }
        //left part sorted
        if(nums[start]<=nums[mid])
        {
            if(k>=nums[start] && k<nums[mid])
            {
                end=mid-1
            }
            else{
                start=mid+1;
            }
        }
        //right part sorted
        else{
            if(k>nums[mid] && k<=nums[end])
            {
                start=mid+1
            }
            else{
                end=mid-1
            }
        }
     }
     return -1;
}
console.log(searchinRotedSortedArray([5,1,3],3))

//o(nlogn)


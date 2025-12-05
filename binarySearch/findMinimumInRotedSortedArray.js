// Minimum in Rotated Sorted Array

// Mark as Completed

// 143


// Problem Statement:
// Given an integer array arr of size N,
//  sorted in ascending order (with distinct values),
//  the array is rotated at any index which is unknown.
//  Find the minimum element in the array.

// Pre-requisites: Search in Rotated Sorted Array I,  Search in Rotated Sorted Array II & Binary Search algorithm

// Examples
// Input: arr = [4,5,6,7,0,1,2,3]
// Output: 0
// Explanation: The minimum element in the array is 0.

// Input : arr = [3,4,5,1,2]
// Output: 1
// Explanation : The minimum element in the array is 1.
            
var findMinimumInRotatedSortedArray=function(nums)
{
    let start=0;let end=nums.length-1;
     while(start<=end)
     {
        let mid=Math.floor((start+end)/2);

        console.log(mid)
        if(nums[mid]>=nums[end])
        {
            start=mid+1;
        }
        else{
            end=mid
        }
     }

     return nums[start]

}
console.log(findMinimumInRotatedSortedArray([1,2,3,4,5]))
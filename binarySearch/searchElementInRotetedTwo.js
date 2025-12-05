// Problem Statement: Given an integer array arr of size N,
//  sorted in ascending order (may contain duplicate values) and a target value k.
//  Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False.

// Examples
// Example 1:
// Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3
// Result: True
// Explanation: The element 3 is present in the array. So, the answer is True.

// Example 2:
// Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10
// Result: False
// Explanation: The element 10 is not present in the array. So, the answer is False.

var searchinRotedSortedArray=function(nums,k)
{
     let start=0;let end=nums.length-1;
     while(start<=end)
     {
        let mid=Math.floor((start+end)/2)
        if(k==nums[mid])
        {
            return true
        }
        //left part sorted
        if(nums[start]<nums[mid])
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
     return false;
}
console.log(searchinRotedSortedArray([1,0,1,1,1],0))
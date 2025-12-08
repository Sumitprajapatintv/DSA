// Peak element in Array

// Mark as Completed

// 219


// Problem Statement: Given an array of length N,
//  peak element is defined as the element greater than both of its neighbors.
//  Formally, if arr[i] is the peak element, arr[i - 1] < arr[i] and arr[i + 1] < arr[i].
//  Find the index(0-based) of a peak element in the array. 
// If there are multiple peak numbers, return the index of any peak number.

// Examples
// Input: arr[] = {1,2,3,4,5,6,7,8,5,1}
// Output: 7
// Explanation: There is only 1 peak element, 8,  that is at index 7.

// Input: arr[] = {1,2,1,3,5,6,4} 
// Output: 1 
// Explanation : There are 2 peak numbers that are at indices 1 and 5. We can return any of them.


// var findPeak = function (nums) {
//     nums[-1]=-Infinity;
//     nums[nums.length]=-Infinity;
//     let ans;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= nums[i - 1] && nums[i] >= nums[i + 1]) {
//             ans = i;
//             break
//         }
//     }
//     return ans
// }
// console.log(findPeak([2,1]))

var findPeak = function (nums) {
    nums[-1]=-Infinity;
    nums[nums.length]=-Infinity;
    let start=0;
    let end=nums.length-1;
    while(start<=end)
    {
        let mid=Math.floor((start+end)/2)

        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1])
        {
            return mid;
        }
        else if(nums[mid]>nums[mid-1])
        {
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return -1
}
console.log(findPeak([1,2,3,4,5,6,7,8,5,1]))

//Complexity- o(n)
// 169. Majority Element
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
// The input is generated such that a majority element will exist in the array.


// Follow-up: Could you solve the problem in linear time and in O(1) space?


//Brute Force
// function majorityElement(arr) {
//     let mp = new Map();
//     let max = -Infinity
//     let maxkey;
//     for (let i = 0; i < arr.length; i++) {
//         mp.set(arr[i], (mp.get(arr[i]) || 0) + 1)
//         if (mp.get(arr[i]) > max) {
//             max = mp.get(arr[i])
//             maxkey = arr[i]
//         }
//     }
//     return maxkey
// }
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,2,2,2,2,23,3,3,3,3,3,3,3,3,3,3,3,3,3,]))



// function majorityElement(arr) {
//     const sorted= arr.sort((a,b)=>a-b)
//     console.log(Math.round(sorted.length/2))
//     return sorted[Math.floor(sorted.length/2)]
// }
// console.log(majorityElement([1]))


function majorityElement(arr) {
  let condidate=0;
  let count=0;
  for(let num of arr)
  {
    if(count==0)
    {
        condidate=num
        count++;
    }
    else{
        if(num==condidate)
        {
            count=count+1;
        }
        else{
            count=count-1;
        }
    }
  }
  return condidate
}
console.log(majorityElement([3,3,4]))



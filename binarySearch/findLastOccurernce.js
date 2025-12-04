// Problem Statement: Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1. Note: Consider 0 based indexing

// Examples
// Example 1:  
// Input: N = 7, target = 13, array[] = {3, 4, 13, 13, 13, 20, 40}  
// Output: 4  
// Explanation: The target value 13 appears for the first time at index number 2 in the array.  

// Example 2:  
// Input: N = 7, target = 60, array[] = {3, 4, 13, 13, 13, 20, 40}  
// Output: -1  
// Explanation: Target value 60 is not present in the array, so the output is -1.


// function lastOccrence(nums, target) {
//     let first=-1;
//       let second=-1;
//     let j=0;
//     let isFirst=true
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == target) {
//             if(isFirst)
//             {
//                 first=i;
//                 isFirst=false
//             }
//             second=i
//         }
//     }
//     return [first,second];
// }
// console.log(lastOccrence([5,7,7,8,8,10], 8))

//
function binarySearch(nums,target)
{
   const f= occurrence(nums,target,"first");
   const s= occurrence(nums,target,"second");
   if(f==-1)
   {
    return s+1;
   }
   if(s==-1)
   {
    return f+1;
   }
   return f-s+1
}

function occurrence(nums,target,type)
{
    let occ=-1;
    let start=0,end=nums.length-1;
    while(start<=end)
    {
        let mid=Math.floor((start+end)/2);
        if(nums[mid]==target){
            if(type=="first")
            {
                occ=mid; 
                start=mid+1
            }
            else{
                occ=mid;
                end=mid-1
            }
        }
        else if(target<nums[mid]){end=mid-1}
        else{
            start=mid+1;
        }
    }
  return occ
}




console.log(binarySearch([1, 1, 2 ,2 ,2 ,2 ,3],4))
// Example 1:
// Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
// Result: 4 7
// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

// Example 2:
// Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 8
// Result: 8 8
// Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.



//Brute force

function floorandCiel(nums,target)
{
    nums.sort((a,b)=>a-b);
     let start=0,end=nums.length-1;
    while(start<=end)
    {
        let mid=Math.floor((start+end)/2);
        if(nums[mid]==target)return [nums[mid],nums[mid]];
        else if(target<nums[mid]){end=mid-1}
        else{
            start=mid+1;
        }
    }
    return [nums[start-1]==undefined ?-1 : nums[start-1],nums[end+1] ==undefined ?-1: nums[end+1] ]
}
console.log(floorandCiel([36, 82, 88 ,56, 21, 17, 73, 86],17))

// 37
// 17 23
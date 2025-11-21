// function longest1(nums,k)
// {
//     for(let i=0;i<nums.length;i++)
//     {
//         let sum=0
//         for(j=0;j<nums.length;j++)
//         {
//             sum+=nums[j]
//             if(sum==k)
//             {
//                 return j-i+1
//             }
//         }
//     }
//     return -1
// }

// console.log(longest1([2,3,5],5))

function longest1(nums,k)
{
    let sum=0
    for(let i=0;i<nums.length;i++)
    {
       sum+=nums[i];

    }
    return -1
}

console.log(longest1([2,3,5,1,9],10))

function longestSubarrayK(arr, k) {
  let prefix = 0, maxLen = 0;
  let map = new Map(); // prefix -> first index

  for (let i = 0; i < arr.length; i++) {
    prefix += arr[i];

    if (prefix === k) maxLen = Math.max(maxLen, i + 1);
    if (map.has(prefix - k)) {
      let idx = map.get(prefix - k);
      maxLen = Math.max(maxLen, i - idx);
    }

    if (!map.has(prefix)) {
      map.set(prefix, i);
    }
  }

  return maxLen;
}

console.log(longestSubarrayK([1,2,3,1,1,1,2,3], 6)); // 4

k=5
// 3, 1, 2, 1, 1, 1, 4, 2

3-0
1-1
6-2
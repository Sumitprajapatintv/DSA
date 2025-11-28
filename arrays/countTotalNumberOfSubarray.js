// function countTotalNumber(nums,k)
// {
//     let count=0;
//     for(let i=0;i<nums.length;i++)
//     {
//         let sum=0;
//         for(let j=i;j<nums.length;j++)
//         {
//             sum+=nums[j]
//             if(sum==k)
//             {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(countTotalNumber([1,2,1,2,1],3))

function countTotalNumber(nums,k)
{
    let count=0;
    let sum=0;
    let mp=new Map();
    mp.set(0,1)
    for(let i=0;i<nums.length;i++)
    {
        sum+=nums[i]
        if(mp.has(sum-k))
        {
            count+=mp.get(sum-k)
        }
        mp.set(sum,(mp.get(sum)||0)+1)
    }
    console.log(mp)
    return count;
}
console.log(countTotalNumber([3, 1, 2, 4],6))

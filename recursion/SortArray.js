/**
 * @param {number[]} nums
 * @return {number[]}
 */
function insert(nums,temp)
{
    if(nums.length==0 || temp>=nums[nums.length-1])
    {
        nums.push(temp)
        return nums
    }
    let val=nums[nums.length-1]
    nums.pop()
    insert(nums,temp)
    nums.push(val)
    return nums
}
// var sortArray = function(nums) {
//     if(nums.length==1)
//     {
//         return nums
//     }
//     let temp=nums[nums.length-1]
//     nums.pop()
//     sortArray(nums)
//     insert(nums,temp)
//     return nums
// };
function sortStack(nums)
{

}
console.log(sortStack([5,2,3,1]))
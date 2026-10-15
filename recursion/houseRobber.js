function helpher(nums,i)
{
    if(i==nums.length)
    {
        return 0
    }
    let include=nums[i]+helpher(nums,i+2)
    let exclude=helpher(nums,i+1)
    
    
}
function houseRobber(nums)
{
   return helpher(nums,0)
}
console.log(houseRobber([2,7,9,3,1]))
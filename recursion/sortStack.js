function insertInStack(nums,temp)
{
    console.log("stack",nums[nums.length-1])
   if(nums.length==0  || nums[nums.length-1]>=temp)
   {
        nums.push(temp)
        return
   }
   console.log(temp)
}
function sortStack(nums)
{
    if(nums.length>0)
    {
        let temp=nums.pop()
        console.log(temp,nums)
        sortStack(nums)
        insertInStack(nums,temp)
    }
}

console.log(sortStack([4, 1, 3, 2]))

//memory stcck
nums[4]
sortStack([4,1]),insertInStack([4],1)
    
sortStack([4,1,3]),insertInStack([4,1],3)
sortStack([4,1,3,2]),insertInStack([4,1,3],2)

//temp-2 nums=[4,1,3]
//temp-3 nums[4,1]
//temp-1 nums[4]
//temp-4 nums []


function insertInStack(nums,temp)
{
   if(nums.length==0)
   {
        nums.push(temp)
        return
   }
   let val=nums.pop()
   insertInStack(nums,temp)
   nums.push(val)
}
function reverse(nums)
{
  if(nums.length==0)
  {
    return nums
  }
  let temp=nums.pop()
  reverse(nums)
  insertInStack(nums,temp)
  return nums
}

console.log(reverse([1,2,3,4]))
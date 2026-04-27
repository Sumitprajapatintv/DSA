function checkArrayIsSorted(nums,i)
{
   if(i==nums.length)
   {
        return true
   }        
   else
   {
    if(nums[i-1]>nums[i])
    {
        return false
    }
   }
   return true
}
console.log(checkArrayIsSorted([10,20,30,40,50],2))
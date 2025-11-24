function twosum(nums,sum)
{
   for(let i=0;i<nums.length;i++)
   {
     for(j=i;j<nums.length;j++)
     {
        if(nums[i]+nums[j]==sum)
        {
            return [i+1,j+1]
        }
     }
   }
   return [-1,-1]
}
console.log(twosum([2,7,11,15],9))

function twosum1(nums,sum)
{
   let mp=new Map();
   for(let i=0;i<nums.length;i++)
   {
        if(mp.has(sum-nums[i]))
        {
              return [mp.get(sum-nums[i]),i]
        }
        else{
  mp.set(nums[i],i)
        }
      
   }

   return [-1,-1]
}
console.log(twosum1([2,7,11,15],9))
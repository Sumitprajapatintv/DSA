var missingNumber = function(nums) {
    nums=nums.sort((a,b)=>a-b)
    console.log(nums)
    for(let i=0;i<=nums.length;i++)
    {
        if((i^nums[i])!=0)
        {
            return i
        }
    }
};
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
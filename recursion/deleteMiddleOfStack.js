function helpher(nums,k)
{
    if(k==1)
    {
        nums.pop()
        return nums
    }
    let temp=nums.pop()
    helpher(nums,k-1)
    nums.push(temp)
    return nums
}
function deleteMiddleOfStack(nums)
{
 return helpher(nums,Math.floor(nums.length/2)+1)
}
console.log(deleteMiddleOfStack([10, 20, 30, 40, 50]))
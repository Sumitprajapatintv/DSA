function insertionSort(nums)
{
     for(let i=0;i<nums.length;i++)
     {
        let j=i;
        while(j>0 && nums[j-1]>nums[j])
        {
            swap(nums,j,j-1)
            j--;
        }
     }
     return nums;
}
function insertionSortRecursive(nums, i,j)
{
    if(i==nums.length){
        return nums
    }
    if(j>0 && nums[j-1]>nums[j])
    {
        swap(nums,j,j-1)
        return insertionSortRecursive(nums,i,j-1)
    }
    else
    {
        return insertionSortRecursive(nums,i+1,i+1)
    }
}
function swap(nums, a, b){
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
}
// console.log(insertionSort([5, 4, 3, 2, 1]))

console.log(insertionSortRecursive([5, 4, 3, 2, 1],0,0))
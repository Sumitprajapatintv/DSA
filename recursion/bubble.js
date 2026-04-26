function bubbleSort(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = 0; j < nums.length-i-1; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1)
            }
        }
    }
    return nums
}
function bubbleSortRecursion(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = 0; j < nums.length-i-1; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1)
            }
        }
    }
    return nums
}
//Recursion
function bubbleSortRecurion(nums,i,j)
{
    if(i==0)
    {
        return nums
    }
    if(j<i)
    {
        if(nums[j]>nums[j+1])
        {
            swap(nums,j,j+1)
        }
        bubbleSortRecurion(nums,i,j+1)
    }
    else
    {
        bubbleSortRecurion(nums,i-1,0)
    }
}
function swap(nums, a, b) {
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
}
console.log(bubbleSort([5, 4, 3, 2, 1]))

console.log(bubbleSortRecursion([5, 4, 3, 2, 1],5,0))

// 5, 4, 3, 2, 1

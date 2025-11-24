function leadersInArray(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        isLarger=true
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[j]>nums[i])
            {
                isLarger=false
            }
        }
        if(isLarger)ans.push(nums[i])

    }
    return ans
}

// console.log(leadersInArray([10, 22, 12, 3, 0, 6]))

// Time - o(n^2)
// Space-o(n) worst case

function leadersInArray1(nums) {
    let ans = [nums[nums.length-1]];
    let max=nums[nums.length-1]
    for (let i = nums.length-2; i > 0; i--) {
        if(nums[i]>max)
        {
            max=nums[i]
            ans.push(nums[i])
        }

    }
    return ans
}

console.log(leadersInArray1([10, 22, 12, 3, 0, 6]))

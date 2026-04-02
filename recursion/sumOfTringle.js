function sumOfTringle(nums, n) {
    if (n < 1) {
        return
    }
    let temp = []
    for (let i = 0; i < nums.length - 1; i++) {
        let ans = nums[i] + nums[i + 1]
        temp.push(ans)
    }
    sumOfTringle(temp, n - 1)
    console.log(nums)

}   
console.log(sumOfTringle([1, 2, 3, 4, 5], 5))
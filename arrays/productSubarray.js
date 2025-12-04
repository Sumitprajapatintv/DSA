// 152. Maximum Product Subarray
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Note that the product of an array with a single element is the value of that element.



// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any subarray of nums is guaranteed to fit in a 32-bit integer.


// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 1,852,206/5.2M
// Acceptance Rate
// 35.7%


function maximumProduct(nums) {
    let maxProduct = nums[0]
    let prod = 1;

    for (let i = 0; i < nums.length; i++) {
        prod = prod * nums[i]

        maxProduct = Math.max(maxProduct, prod)

    }
    return maxProduct
}
console.log(maximumProduct([0,2]))



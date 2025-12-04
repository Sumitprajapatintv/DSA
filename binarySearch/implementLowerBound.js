function binarySearch(nums, target) {
    let start = 0, end = nums.length - 1;
    let lb = nums.length;
    while (start <= end) {
     
        let mid = Math.floor((start + end) / 2);
     
        if (target <= nums[mid]) { lb = mid; end = mid - 1 }
        else {
            start = mid + 1;
        }
        
    }
    return lb
}
console.log(binarySearch([2, 3, 7, 10, 11, 11, 25], 11))
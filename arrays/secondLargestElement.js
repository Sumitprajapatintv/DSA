// function sortArray(nums) {
//   return nums.sort((a, b) => a - b);
// }
// function secondLargestElement(arr) {
//     const sorted = sortArray(arr)
//     return sorted[sorted.length-2];
// }

// function secondSmallestElement(arr) {
//     const sorted = sortArray(arr)
//     return sorted[1];
// }

// console.log(secondLargestElement([1, 2, 4, 7, 7, 5]))
// console.log(secondSmallestElement([1, 2, 4, 7, 7, 5]))


function sortArray(nums) {
  return nums.sort((a, b) => a - b);
}
function secondLargestElement(arr) {
     let largest=Math.min();
     let secondLargest=Math.min()

     for(let i=0;i<arr.length;i++)
     {
        if(arr[i]>largest)
        {
            largest=arr[i];
            secondLargest=largest;
        }
        else if(arr[i]>secondLargest )
        {
            largest=arr[i]
        }
     }
    return secondLargest;
}

function secondSmallestElement(arr) {
    const sorted = sortArray(arr)
    return sorted[1];
}

console.log(secondLargestElement([1, 2, 4, 7, 7, 5]))
// console.log(secondSmallestElement([1, 2, 4, 7, 7, 5]))
function largestNumber(arr) {
    let lar = Math.max();
    console.log(lar);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lar) {
            lar = arr[i]
        }
    }
    return lar
}

console.log(largestNumber([1, 2, 3, 4, 5])); 
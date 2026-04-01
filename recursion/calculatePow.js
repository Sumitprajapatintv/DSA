function calculatePow(number, n) {
    if (n == 1) {
        return 2
    }
    return 2*calculatePow(2,n-1)
}
console.log(calculatePow(2, -2))

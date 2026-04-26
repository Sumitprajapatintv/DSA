function sumOfDigit(num, sum) {
    if (num == 0) return sum
    let rem = num % 10
    console.log(rem)
    sum = sum + rem
    num = num / 10
    return sumOfDigit(num, sum)

}
console.log(sumOfDigit(12345, 0))


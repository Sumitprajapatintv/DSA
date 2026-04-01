let m = 1000000007n
function binaryExpo(a, b) {
    a = BigInt(a)
    b = BigInt(b)
    if (b == 0n) return 1n
    let half = binaryExpo(a, (b / 2n))
    var result = (half * half) % m
    if (b % 2n == 1n) {
        result = (result * a) % m
    }
    return result
}
function calculateGoodNumbers(n) {
    n = BigInt(n)
    let evenPlaces = (n + 1n) / 2n;
    let oddPlaces = n / 2n;
    return Number((binaryExpo(5n, evenPlaces) * binaryExpo(4n, oddPlaces)) % m)
}
console.log(calculateGoodNumbers(4))



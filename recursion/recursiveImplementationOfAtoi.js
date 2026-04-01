// function atoi(str) {
//     str = str.trim()
//     console.log("str", str)
//     isNeg = false
//     const INT_MIN = -2147483648;
//     const INT_MAX = 2147483647;
//     let ans = 0
//     for (let i = 0; i < str.length; i++) {
//         if (i == 0 && str[i] == '-') {
//             isNeg = true
//             continue
//         }
//         console.log("Number.MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER)
//         if (str[i] >= '0' && str[i] <= '9') {
//             let ch = str[i] - '0'
//             ans = ans * 10 + ch

//             if (isNeg) {

//                 if (-ans < INT_MIN) {
//                     return INT_MIN
//                 }
//             }
//             else {
//                 if (ans > INT_MAX)
//                     return INT_MAX
//             }

//         }
//         else {
//             break
//         }
//     }
//     return isNeg ? -ans : ans

// }
// console.log(atoi("-91283472332"))
const INT_MIN = -2147483648;
const INT_MAX = 2147483647;
function helpher(s, i, res, isSign) {
    if (i >= s.length || isNaN(Number(s[i])) || s[i] < '0' || s[i] > '9') {
        return isSign * res
    }
    res = res * 10 + (s[i] - '0')
    if (isSign * res < INT_MIN) return INT_MIN
    if (isSign * res > INT_MAX) return INT_MAX
    return helpher(s, i + 1, res, isSign)
}

function atoi(str) {
    str = str.trim()
    let i = 0
    let isSign = 1
    if (str[i] == '+') {
        isSign = 1
        i++
    }
    if (str[i] == "-") {
        isSign = -1
        i++
    }
    return helpher(str, i, 0, isSign)
}
console.log(atoi("4193 with words"))

// res=0*10+4
// res=4*10+3
// res=43*10+2
// res=432*10+1=4321


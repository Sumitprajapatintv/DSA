function helpher(str, i, j) {
    if (i >= j) {
        return str
    }
    let temp = str[i]
    str[i] = str[j]
    str[j] = temp
    return helpher(str, i + 1, j - 1)

}
function reverseString(str) {
    return helpher(str, 0, str.length - 1)
}   
console.log(reverseString(["h", "e", "l", "l", "o"]))
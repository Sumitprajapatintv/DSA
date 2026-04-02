function helpher(str, i) {
    if (i == str.length) {
        return
    }
    if(str[i]==str[i].toUpperCase())
    {
        return str[i]
    }
    return helpher(str,i+1)
}
function findFirstUpper(str) {
    return helpher(str,0)
}
console.log(findFirstUpper("geeksforgeeKs"))
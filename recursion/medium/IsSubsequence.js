function helpher(pr,up,s,count){
    if(up.length==0)
    {
        console.log(pr)
        return
    }
    let ch=up[0]
    helpher(pr+ch,up.substring(1),s)
    helpher(pr,up.substring(1),s)
}
function isSubsequence(s, t) {
    return helpher('',t,s,0)
}
console.log(isSubsequence("abc", "ahbgdc")) // true

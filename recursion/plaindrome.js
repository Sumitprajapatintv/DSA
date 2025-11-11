function plaindrome(i,str)
{
    if(i>((str.length)/2))
    {
        return true
    }
    if(str[i]!==str[str.length-i-1]) return false
    return plaindrome(i+1,str)
}

console.log(plaindrome(0,"ABCDCBA"))
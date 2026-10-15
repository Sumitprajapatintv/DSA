var findTheDifference = function(s, t) {
    let result=""
    for(let i=0;i<t.length;i++)
    {
        if(i<s.length)
        {
            result=t[i]^s[i]
        }
        else
        {
            result=t[i]
        }

    }
    return result
};
console.log(findTheDifference("abcd","abcde"))
function helpher(n,a,b,ans)
{
    if(a==b)
    { 
        if(checkNumber(a))ans=ans+' '+a
        return ans
    }
    if(checkNumber(a))ans=ans+' '+a
    return helpher(n,a+1,b,ans)
}
function checkNumber(n)
{
    let str=n.toString()
    for(let i=0;i<str.length-1;i++)
    {
        if(str[i]>=str[i+1])
        {
            return false
        }
    }
    return true
}
function nDigitNumber(n)
{
    let a,b;
    if(n==1){
        a=0
        b=9
    }
    else{
        a=Math.pow(10,n-1)
        b=Math.pow(10,n)-1
    }
    return helpher(n,a,b,'')
}
console.log(nDigitNumber(2))
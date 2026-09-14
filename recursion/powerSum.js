function helpher(x,n,c)
{
    if(x==0)
    {
        return 1
    }
    if(x<0 || Math.pow(c,n)>x)
    {
        return 0
    }
    let take=helpher(x-Math.pow(c,n),n,c+1)
    let skip=helpher(x,n,c+1)
    return take+skip
}
function powerSum(x,n)
{
    return helpher(x,n,1)
}
console.log(powerSum(12,2))
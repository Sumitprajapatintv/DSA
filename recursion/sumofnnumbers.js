function sumnumber(n,sum)
{
    if(n<1)
    {
        return sum
    }
    return sumnumber(n-1,sum+n)
}
console.log(sumnumber(5,0))





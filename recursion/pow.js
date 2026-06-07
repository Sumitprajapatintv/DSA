function pow(x,n)
{
    if(n==0)return 1
    if(n==1)return x
    if(n<0)
    {
        x=1/x
        n=-n
    }
    let m=pow(x,Math.floor(n/2))
    if(n%2==0)
    {
        return m*m
    }
    else{
        return x*m*m
    }
}
console.log(pow(2,-2))



// fun(2,10)
// fun(2,5)=32*32
// 2*fun(2,2)=2*4*4=32
// fun(2,1)=2*2=4
// fun(2,0)=2






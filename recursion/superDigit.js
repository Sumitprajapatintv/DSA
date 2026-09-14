function helpher(n,k,sum)
{
    if(n<10)
    {
        return n
    }
    while(n>0)
    {
        let rem=n%10
        sum=sum+rem
        n=Math.floor(n/10)
    }
    return helpher(sum,k,0)

}
function superDigit(n, k) {
     let sum = 0;

    for (let digit of String(n)) {
        sum += Number(digit);
    }
 return helpher(Number(sum)*k,k,0)

}
console.log(superDigit(9875,4))

function checkPrimeNumber(num)
{
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return false
        }
    }
    return true
}
function checkPrimeRecursive(num,i)
{
      console.log("i",i,Math.sqrt(num),i>Math.sqrt(num))
    if(num<=1)return false
    if(i>Math.sqrt(num))
    {
        return true
    }
    if(num%i==0)
    {
        return false
    }
  
   return checkPrimeRecursive(num,i+1)
}
console.log(checkPrimeNumber(11)); // true

console.log(checkPrimeRecursive(13,2))
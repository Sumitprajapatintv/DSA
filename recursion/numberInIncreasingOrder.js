function createNumber(n)
{
    let ans=[]
    for(let i=Math.pow(10,n-1);i<=Math.pow(10,n)-1;i++)
    {
        if(checkDigit(i))
        {
             ans.push(i)
        }
    }
    return ans
}
function checkDigit(n)
{
   let arr=[]
   while(n>0)
   {
      let rem=n%10
      arr.push(rem)
      n=Math.floor(n/10)
   }
   return isSorted(arr)
}
function isSorted(arr)
{
    for(let i=arr.length-1;i>0;i--)
    {
        if(arr[i]>=arr[i-1])
        {
            return false
        }
    }
    return true
}
console.log(createNumber(2))

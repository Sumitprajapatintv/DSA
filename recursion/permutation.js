function helpher(pr,ur,i,result)
{
    if(i==ur.length)
    {
        result.push([...pr])
        return
    }
    for(let j=0;j<=pr.length;j++)
    {
       let first=pr.slice(0,j)
       let seceond=pr.slice(j,pr.length)
       let a=[...seceond,ur[i],...first]
       helpher(a,ur,i+1,result)
    }
}
function permutation(nums)
{
   let result=[]
   let ans =helpher([],nums,0,result)
   return result;
}
console.log(permutation([1,2,3]))
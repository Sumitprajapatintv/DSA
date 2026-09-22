function helpher(pr,ur,result)
{
    if(ur.length==0)
    {
        result.push([...pr])
        return
    }
    for(let j=0;j<ur.length;j++)
    {
       let curr=ur[j]
       let remain=[...ur.slice(0,j),...ur.slice(j+1)]
       helpher([...pr,curr],remain,result)
    }
}
function permutation(nums)
{
   let result=[]
   let ans =helpher([],nums,result) 
   let count=0;
   for(i=0;i<result.length;i++)
   {
    for(let j=0;j<result.length;j++)
    {
            if(result[i][j]%j+1==0 || j+1 %result[i][j]==0)
            {
                count++;
            }
    }
   }
   return count;
}
console.log(permutation([1]))
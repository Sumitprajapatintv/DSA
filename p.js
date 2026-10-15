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
var maxAlternatingSum = function(nums) {
    let ans=[]
    helpher([],nums,0,ans)
    console.log(ans)
    let res=0;
    for(let i=0;i<ans.length;i++)
    {
        let sum=0
        for(let j=0;j<ans[0].length;j++)
        {
            if(j%2==0)
            {
                sum=sum+(ans[i][j]**2)
            }
            else
            {
                sum=sum-(ans[i][j]**2)
            }
        }
        res=Math.max(res,sum)
    }
    console.log(res)
    return res
};
console.log(maxAlternatingSum([1,2,3]))
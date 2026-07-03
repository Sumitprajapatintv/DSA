
let mp=new Map()
function helpher(pr,ur,i,target,finalAns)
{
    if(i==ur.length)
    {
        if(target==0)
        {
            if(!mp.has(JSON.stringify(pr)))
            {
                finalAns.push([...pr])
                mp.set(JSON.stringify(pr),pr)
            }   
        }
        return
    }
    if(ur[i]<=target){
         helpher([...pr,ur[i]],ur,i+1,target-ur[i],finalAns)
    }
      helpher(pr,ur,i+1,target,finalAns)
}
var combinationSum2 = function(candidates, target) {
    let ans=[]
    let sorted=candidates.sort((a,b)=>a-b)
     helpher([],candidates,0,target,ans)
     return ans
};

console.log(combinationSum2([1,1],1))

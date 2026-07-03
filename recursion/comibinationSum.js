function helpher(pr,ur,i,target,finalAns)
{
    if(i==ur.length)
    {
        if(target==0)
        {
            finalAns.push([...pr])
        }
        return
    }
    if(ur[i]<=target){
         helpher([...pr,ur[i]],ur,i,target-ur[i],finalAns)
    }
      helpher(pr,ur,i+1,target,finalAns)
}
var combinationSum = function(candidates, target) {
    let ans=[]
     helpher([],candidates,0,target,ans)
     return ans
};

console.log(combinationSum([2,3,6,7],7))

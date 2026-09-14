function helpher(pr,ur,target,sum,i)
{
    if(i==ur.length)
    {
        if(sum==target)
        {
            return 1
        }
        else 
            {
                return 0
            }  
    }
    return helpher([...pr,`+${ur[i]}`],ur,target,sum+ur[i],i+1)+
    helpher([...pr,`-${ur[i]}`],ur,target,sum-ur[i],i+1)
}
var findTargetSumWays = function(nums, target) {
    let an=helpher([],nums,target,0,0)
    return an
};

console.log(findTargetSumWays([1,1,1,1,1],3))
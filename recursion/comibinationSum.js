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
//generate all combination
function helper(pr, ur, i, finalAns) {
    if (i == ur.length) {
        finalAns.push([...pr]);
        return;
    }

    helper([...pr, ur[i]], ur, i+1, finalAns);
    helper(pr, ur, i + 1, finalAns);
}

var combinationSum = function(candidates, target) {
    let ans = [];
    helper([], candidates, 0, ans);
    return ans;
};

console.log(combinationSum([2,3,6,7]));

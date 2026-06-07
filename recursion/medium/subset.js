function helpher(i,pr,ur,ans)
{
    if(i==ur.length)
    {
        ans.push(pr)
        return
    }
    helpher(i+1, [...pr,ur[i]], ur, ans)
    helpher(i+1, pr, ur, ans)
}
function subset(nums)
{
                let ans = []
                helpher(0, [], nums, ans)
                return ans  
}
console.log(subset([1,2,3]))
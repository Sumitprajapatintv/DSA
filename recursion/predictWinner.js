function helpher(nums,p1Sum,p2Sum,i)
{
    if(nums.length==0)
    {
        return p1Sum>p2Sum
    }
    if(i%2==0) {
        let left=nums.shift()
        helpher(nums,p1Sum+left,p2Sum,i+1)
        nums.unshift(left)

        let right=nums.pop()
        helpher(nums,p1Sum+right,p2Sum,i+1)
        nums.push(right)
    }
    else {
         let left=nums.shift()
        helpher(nums,p1Sum,p2Sum+left,i+1)
        nums.unshift(left)

        let right=nums.pop()
        helpher(nums,p1Sum,p2Sum+right,i+1)
        nums.push(right)
    }
    return p1Sum>p2Sum
}
var predictTheWinner = function(nums) {
    let p1Sum=0;
    let p2Sum=0;
    return helpher(nums,p1Sum,p2Sum,0)
};
console.log(predictTheWinner([1,5,233,7]))
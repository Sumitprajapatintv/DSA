function helpher(coins,amount,i,coinCount)
{
    if(amount==0)
    {
       ans.push(coinCount)
       return 1
    }
    if(i==coins.length || amount<0)
    {
        return 0
    }
    let include=helpher(coins,amount-coins[i],i,coinCount+1)
    let exclude=helpher(coins,amount,i+1,coinCount)
    return Math.min(include,exclude)
}
var coinChange = function(coins, amount) {
    let ans=[]
    return helpher(coins,amount,0,0,ans)
};
console.log(coinChange([1,2,5],11))
function helpher(amount,coins,i)
{
    if(i==coins.length)
    {
        if(amount==0)
        {
            return 1
        }
        else return 0
    }
    
     helpher(amount-coins[i],coins,i)
     helpher(amount-coins[i],coins,i+1)
}
var change = function(amount, coins) {
    return helpher(amount,coins,0)
};  
console.log(change(5,[1,2,5]))
function helpher(n,k) {
    if (n == 1) {
        return "0"
    }
    ans = helpher(n - 1, k)
    return chnageString(ans)
}
var kthGrammar = function (n, k) {   
    if(n==1){
        return '0'
    }  
    let len=Math.pow(2,n-1) 
    let mid=len/2
    ch=''
    if(k<=mid)
    {
        ch=Number(kthGrammar(n-1,k))
    }
    else{
       ch=1-Number(kthGrammar(n-1,k-mid))
    }
    return ch
     
};

console.log(kthGrammar(30,434991989))

// len=2^5-1=16
// mid=16/2=9
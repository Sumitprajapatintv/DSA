function amstrong(n){
    let ab=n;
    let reverseNumber=0
    let ans=0;
    while(n!=0)
    {
        let remainder=n%10;
        // console.log(remainder)
       ans=ans+(remainder*remainder*remainder);

        n=Math.floor(n/10)
    }
    // console.log(ans)
    if(ans==ab)
    {
        return true
    }
    return false;
}

console.log(amstrong(153))
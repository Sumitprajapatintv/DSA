function checkPlaindrome(n) {
    let ab=n;
    let reverseNumber = 0;
    let isNegative=false;
    if(n<0)
    {
        isNegative=true
    }
    n=Math.abs(n)
    while (n != 0) {
        let remainder = n % 10;
        reverseNumber = reverseNumber * 10 + remainder;
        n=Math.floor(n/10)
    }

    if(reverseNumber==ab)
        return true
    else return false

}


console.log(checkPlaindrome(121))
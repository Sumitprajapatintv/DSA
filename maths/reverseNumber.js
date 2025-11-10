function reverseNumber(n) {
    const min = -(2 ** 31);
    const max = 2 ** 31 - 1;
    console.log(min)
    console.log(max)
    
    let reverseNumber=0;
    let isNegative=false;
    if(n<0)
    {
        isNegative=true;
        n=Math.abs(n)
    }
    while (n > 0) {
        let lastDigit = n % 10
        reverseNumber=reverseNumber*10+lastDigit
          n=Math.floor(n/10);
    }
    if(reverseNumber>max || reverseNumber<min)
    {
        return 0
    }
    return isNegative==true?-reverseNumber:reverseNumber;

}
console.log(reverseNumber(1534236469))
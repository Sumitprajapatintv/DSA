function minBitToConvert(num) {
    let res = "";
    
    if (num === 0) {
        return "0";
    }
    while (num > 1) {
        if (num % 2 === 1) {
            res += "1";
        } else {
            res += "0";
        }

        num = Math.floor(num / 2);
    }

    res += "1";

    return res.split("").reverse().join("");
}

function convertBinaryToDecimal(start, goal) {
    let startInBinary = minBitToConvert(start);
    let goalInBinary = minBitToConvert(goal);
    let count=0;
    let maxLength=Math.max(startInBinary.length,goalInBinary.length)
    startInBinary=startInBinary.padStart(maxLength,'0')
    goalInBinary=goalInBinary.padStart(maxLength,'0')
    for(let i=startInBinary.length-1;i>=0;i--)
    {
        if(startInBinary[i]!=goalInBinary[i])
        {
            count++
        }
    }
    return count
}

console.log(convertBinaryToDecimal(10, 7));
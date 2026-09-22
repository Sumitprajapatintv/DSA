// function helpher(pr,ur,j,result)
// {
//     if(j==ur.length)
//     {
//         return result.push(pr)
//     }
//     let digit=parseInt(ur[j]);
//     if(digit==7 || digit==9)
//     {
//         for(let i=(digit-2)*3;i<(digit-1)*3;i++)
//         {
//             let ch=String.fromCharCode('a'.charCodeAt(0) + i);
//             helpher(pr+ch,ur,j+1,result)
//         }
//     }
//     else{
//         for(let i=(digit-2)*3;i<(digit-1)*3;i++)
//         {
//             let ch=String.fromCharCode('a'.charCodeAt(0) + i);
//             helpher(pr+ch,ur,j+1,result)
//         }
//     }
// }
// function letterCombination(str)
// {
//     let result=[]
//     helpher([],str,0,result)
//     return result
// }
const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
};
function helpher(pr,ur,j,result)
{
    if(j==ur.length)
    {
        return result.push(pr)
    }
    for(let i=0;i<map[ur[j]].length;i++)
    {
        helpher(pr+map[ur[j]][i],ur,j+1,result)
    }
}
var letterCombinations = function(digits) {
     let result=[]
    helpher([],digits,0,result)
    return result
};
console.log(letterCombinations("23"))
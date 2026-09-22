// function decodeString(s)
// {
//     let numStack=[]
//     let chatStack=[]
//     let answer=''
//     for(let i=0;i<s.length;i++)
//     {
//         if(s[i]>="0" && s[i]<="9")
//         {
//             let num=0
//             while(i<s.length && s[i]>=0 && s[i]<=9)
//             {
//                 num=num*10+Number(s[i])
//                 i++;
//             }
//             numStack.push(num)
//             i--;
//         }
//         else if(s[i]==']'){
//                 let topAns=''
//                 while(chatStack[chatStack.length-1]!='[')
//                 {
//                     topAns=chatStack.pop()+topAns
//                 }
//                 chatStack.pop()
//                 let numRes=numStack.pop()
//                 let tempAns=""
//                 for(let i=0;i<numRes;i++)
//                 {
//                     tempAns=tempAns+topAns
//                 }
//                 for(ch of tempAns)
//                 {
//                     chatStack.push(ch)
//                 }
//             }
//             else{
//                 chatStack.push(s[i])
//             }
//         }
//     return chatStack.join("");
// }
// console.log(decodeString("100[leetcode]"))

function diffWaysToCompute(expression) {
    function solve(exp) {
        let result = [];

        for (let i = 0; i < exp.length; i++) {

            if (
                exp[i] === '+' ||
                exp[i] === '-' ||
                exp[i] === '*'
            ) {
                let left = solve(exp.substring(0, i));
                let right = solve(exp.substring(i + 1));

                for (let l of left) {
                    for (let r of right) {

                        if (exp[i] === '+') {
                            result.push(l + r);
                        }

                        else if (exp[i] === '-') {
                            result.push(l - r);
                        }

                        else {
                            result.push(l * r);
                        }
                    }
                }
            }
        }

        // No operator means it is just a number
        if (result.length === 0) {
            result.push(Number(exp));
        }

        return result;
    }

    return solve(expression);
}
console.log(diffWaysToCompute("2*3-4*5"))
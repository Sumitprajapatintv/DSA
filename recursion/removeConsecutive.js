// function removeConsecutive(strr)
// {
//     let i=0;
//     let j=0;
//     let str=strr.split("")
//     console.log("str",str)
//     while(i!=strr.length && j!=str.length)
//     {
//         if(str[i]==str[j])
//         {
//             j++
//         }
//         else{
//             i++
//             str[i]=str[j]
//         }
//     }
//     return str.slice(0,i+1).join('')
// }
// console.log(removeConsecutive("aaaaabbbbbb"))
function removeConsecutive(strr, i, j, ans) {
  if (i == strr.length || j == strr.length) {
    return ans.join("");
  }
  if (strr[i] != strr[j]) {
    i=j
    ans.push(strr[j]);
    
  }
  return removeConsecutive(strr, i, j + 1, ans);
}
console.log(removeConsecutive("aaaaabbbbbb", -1, 0, []));

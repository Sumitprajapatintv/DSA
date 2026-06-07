function helpher(str, i, numStack, charStack, ans) {
  if (i == str.length) {
    return charStack.join('');
  }
  //  console.log("str[i]>48",str[i]>48)
  if (str[i] >= "0" && str[i] <= "9") {
    numStack.push(str[i]);
  } else {
    if (str[i] == "]") {
      let topAns = "";
      while (charStack[charStack.length - 1] != "[") {
        topAns = charStack.pop() + topAns;
      }
      charStack.pop();
      let num = numStack.pop();
      let tempAns = "";
      for (let i = 0; i < num; i++) {
        tempAns += topAns;
      }
      for (let ch of tempAns) {
        charStack.push(ch);
      }
    } else {
      charStack.push(str[i]);
    }
  }
  return helpher(str, i + 1, numStack, charStack, ans);
}
function decodeString(str) {
  return (helpher(str, 0, [], [], ""));
}
console.log(decodeString("100[leetcode]"));

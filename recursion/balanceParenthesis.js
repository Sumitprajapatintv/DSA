function balanceParenthesis(str) {
  let ans = [];
  for (let i = 0; i < str.length; i++) {
    if (str.length <= 1) {
      return false;
    }
    else if (str[i] == "[" || str[i] == "{" || str[i] == "(") {
      ans.push(str[i]);
    } else if (str[i] == "]" || str[i] == "}" || str[i] == ")") {
      if (str.length === 0) return false;
      let top = ans[ans.length-1];
      if (
        (str[i] == ")" && top !== "(") ||
        (str[i] == "]" && top !== "[") ||
        (str[i] == "}" && top !== "{")
      ) {
        return false;
      }
      ans.pop();
    }
  }

  return ans.length == 0;
}
console.log(balanceParenthesis("[()]{}{[())]()}"));

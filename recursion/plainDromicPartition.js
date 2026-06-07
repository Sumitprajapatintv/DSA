function findAll(str, i, current, ans) {
  if (i == str.length) {
    ans.push([...current]);
    return ans;
  }
  for (let i = 0; i < str.length; i++) {
    
  }
}
function isPlainDrom(str) {
  let i = 0;
  j = str.length - 1;
  while (i <= j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
console.log(findAll("geeks", 0, [], []));

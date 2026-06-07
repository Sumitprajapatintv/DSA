function findKthBit(n, k) {
  if (n == 1) {
    return "0";
  }
  let prev = findKthBit(n - 1);
  return prev + "1" + invertString(prev);
}
function invertString(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "0") {
      ans += "1";
    } else {
      ans += "0";
    }
  }
  return ans.split('').reverse().join('')
}
console.log(findKthBit(16, 55468).split('')[55468-1]);
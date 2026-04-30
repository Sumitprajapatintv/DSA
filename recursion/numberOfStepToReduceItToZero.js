function test(num, res) {
  if (num == 0) {
    return res;
  }
  if (num % 2 == 0) {
    res = res + 1;
    return test(num / 2, res);
  } else {
    res = res + 1;
    return test(num - 1, res);
  }
}
console.log(test(8, 0));

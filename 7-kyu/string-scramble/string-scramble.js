function scramble(str, arr) {
   const result = [];
​
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i];
  }
​
  return result.join('');
};
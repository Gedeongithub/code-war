function splitByValue(k, elements) {
  const less = [];
  const greaterOrEqual = [];
​
  for (let el of elements) {
    if (el < k) {
      less.push(el);
    } else {
      greaterOrEqual.push(el);
    }
  }
​
  return [...less, ...greaterOrEqual];
}
const reverseList =(list)=> {
  let result = null;
  let current = list;
​
  while (current !== null) {
    result = [current[0], result];
    current = current[1];
  }
​
  return result;
}
​
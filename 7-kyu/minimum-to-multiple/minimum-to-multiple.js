const minimum =(a, x)=> {
  let num = 0;
  for (let i = 0; i <= x; i++) {
    if ((a + i) % x === 0 || (a - i) % x === 0) {
      num = i;
      break; 
    }
  }
  return num;
}
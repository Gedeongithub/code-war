const isValidWalk =(walk)=>{
  
  if(walk.length !== 10) return false;
  
  let north =0,east =0;
  
  for(let direction of walk){
      if(direction === 'n') north++;
      if(direction === 's') north--;
      if(direction === 'e') east++;
      if(direction === 'w') east--
  }
  
  return north === 0 && east === 0;
  
}
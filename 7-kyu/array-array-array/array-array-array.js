 
function explode(x){
let [q,w] = x;
  if(typeof q === 'number' && typeof w === 'number') return new Array(q+w).fill(x);
  if(typeof q === 'number') return new Array(q).fill(x);
  if(typeof w === 'number') return new Array(w).fill(x);
  return 'Void!'
}
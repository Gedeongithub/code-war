function multImplication(arr) {
  if(arr.length === 0) return null;
 let results = arr[0];
 for(let i=1;i<arr.length;i++){
     results =(!results||arr[i])
 }
 return results;
 
}
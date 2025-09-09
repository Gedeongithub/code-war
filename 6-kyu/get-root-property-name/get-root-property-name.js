const getRootProperty =(obj, target)=> {
 for(let key in obj){
     let value = obj[key]
     if(typeof value === 'object' && value !== null){
         if(searchInBranch(value,target)){
             return key
         }
     }
 }
  return null;
}
​
const searchInBranch =(branch, target)=> {
  if (Array.isArray(branch)) {
    return branch.includes(target);
  }
  if (typeof branch === "object" && branch !== null) {
    for (const k in branch) {
      if (searchInBranch(branch[k], target)) {
        return true;
      }
    }
  }
  return false;
}
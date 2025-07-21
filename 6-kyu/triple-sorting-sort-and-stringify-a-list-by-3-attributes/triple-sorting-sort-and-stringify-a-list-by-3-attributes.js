function sort(students) {
  let arr= students.sort((a,b)=>{
      if(a.gpa !== b.gpa) return b.gpa-a.gpa;
          let alastInit = a.fullName.split(' ')[1][0];
          let blastInit = b.fullName.split(' ')[1][0];
      if(alastInit !== blastInit) return alastInit.localeCompare(blastInit)
     return a.gpa-b.gpa
  })
//   return arr
  return arr.map(val=>val.fullName).join`,`
};
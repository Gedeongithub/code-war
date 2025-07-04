function replaceCommon(string, letter) {
  let most = null,max =0,count = [...string].reduce((acc,cur)=>{
      if(cur !== ' '){
    acc[cur]? acc[cur]++:acc[cur]=1;
      }
    return acc
  },{})
for(let key in count){
    if(count[key]>max){
        max=count[key];
        most = key
    }
}
return [...string].map(char=>char=== most? letter: char).join``
}
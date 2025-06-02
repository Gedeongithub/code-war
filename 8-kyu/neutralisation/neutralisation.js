function neutralise(s1, s2) {
    let neutral =''
  for(let i =0;i<s1.length; i++){
      if(s1[i]=== s2[i]){
          neutral+= s1[i]
      }else{
          neutral += 0
      }
  }
  return neutral;
}
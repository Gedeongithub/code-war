const sortTheInnerContent =words =>{
      return words.split(' ').map(word=>{
        let arr = word.split('')
        let inner = word.slice(1,-1)
        let inner1= [...inner].sort((a,b)=>b.localeCompare(a))
​
        arr.splice(1,inner.length,...inner1)
        return arr.join``
    }).join(' ');
}
const getMichaelLastName =(inputText)=> {
    let parts= inputText.split('Michael');
    let name = [];
    for (let i = 1; i<parts.length; i++){
        let part = parts[i].trim();
        let firstWord = part.split(' ')[0]
        if(firstWord&&firstWord[0]===firstWord[0].toUpperCase()&& firstWord.slice(1)===firstWord.slice(1).toLowerCase()&&firstWord.length>1){
             name.push(`Michael ${firstWord[firstWord.length-1] === '?'|| firstWord[firstWord.length-1] === ','||firstWord[firstWord.length-1] === '.'?firstWord.slice(0,-1):firstWord}`)
        }
    }
    return name.map(val=>val.split(' ')[1])
    // return name.map(val=>val.split(' ')[1].slice(0,-1))
}
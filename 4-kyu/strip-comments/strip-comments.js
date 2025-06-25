const solution =(text, markers)=> {
let finalText ='';
let text1 = text.split('\n');
​
for(let i = 0;i<text1.length;i++){
    if(i!==0){finalText+='\n'}
    for(let j =0;j<text1[i].length;j++){
       
        if(!markers.includes(text1[i][j])){
            finalText+=text1[i][j]
        }
        else{break}
    }
}
return finalText.split('\n').map(word=>word.trimEnd()).join('\n');
}
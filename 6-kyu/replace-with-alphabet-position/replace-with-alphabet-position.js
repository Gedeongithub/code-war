function alphabetPosition(text) {
  let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];
let output = [...text.toLowerCase()].map(char=> alphabet.indexOf(char)+1).filter(char=>char !== 0).join(' ');
return output;
}
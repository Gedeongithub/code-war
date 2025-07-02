function encryptor(key, message) {
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
               'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
               'u', 'v', 'w', 'x', 'y', 'z'];
  return message.split('').map(char => {
    let lowerChar = char.toLowerCase();
    let isUpper = char !== lowerChar;
    let index = alpha.indexOf(lowerChar);
​
    if (index !== -1) { 
      let newIndex = (index + key) % 26;
      if (newIndex < 0) newIndex += 26;
      let newChar = alpha[newIndex];
      return isUpper ? newChar.toUpperCase() : newChar;
    } else {
      return char; 
    }
  }).join``;
}
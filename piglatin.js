function translate(text) {
  let vowels = ["a", "e", "i", "o", "u"];

  const smallcase = text.toLowerCase();

  // for (let letter of smallcase) {
  // for (let letter of smallcase) {
  //   if (vowels.includes(letter[0])) {
  if (vowels.indexOf(smallcase[0]) > -1) {
    return `${smallcase}way`;
  } else {
    for (var i = 0; i < smallcase.length; i++) {
      if (vowels.indexOf(smallcase[i]) > -1) {
        let firstConsonants = smallcase.slice(0, i);
        console.log(firstConsonants);
        let restOfWord = smallcase.slice(i, smallcase.length);
        return `${restOfWord}${firstConsonants}ay`;
      }
    }
    // }

    //   for (let i = 0; i > text.length; i++)
    //   text = text.split("");
    //   let n = text.indexOf(vowels);
    //   for (let i = 0; i > vowels.length; i++) return console.log(n);
    //   return `${text.slice(n, text.length)}`;
  }
}

module.exports = { translate };

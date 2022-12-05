function translate(text) {
  let vowels = ["a", "e", "i", "o", "u"];

  const smallcase = text.toLowerCase();
  // if (vowels.includes(smallcase[0]))
  //     return `${smallcase}way`;
  //     else{
  //         for (let letter of smallcase) {

  //         });
  //     }

  for (let letter of smallcase) {
    if (vowels.includes(letter)) {
      if (letter === text[0]) {
        return `${smallcase}way`;
      } else {
        let sections = smallcase.split(letter);
        return `${letter}${sections[1]}${sections[0]}ay`;
      }
    } else {
      //   for (let i = 0; i > text.length; i++)
      //   text = text.split("");
      //   let n = text.indexOf(vowels);
      //   for (let i = 0; i > vowels.length; i++) return console.log(n);
      //   return `${text.slice(n, text.length)}`;
    }
  }
}

module.exports = { translate };

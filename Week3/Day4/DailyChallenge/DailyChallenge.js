let sentence = "The movie is not that bad, I like it";
let  wordNot = sentence.indexOf("not");
let  wordBad = sentence.indexOf("bad");
let newSentence = " ";

if (wordNot < wordBad) {
   newSentence = sentence.replace(/not(.)+bad/,"good")
};

console.log(newSentence);

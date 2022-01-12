//Exercise 1
let me = ["my","favorite","color","is","blue"]
console.log(me.join(" "));

//Exercise 2
let word1 = "night"
let word2 = "love"


let word1New = word1.slice(0,2);
let word2New = word2.slice(0,2);


word1.splice(0, 2, word2.slice(0,2)); 
console.log(word1);


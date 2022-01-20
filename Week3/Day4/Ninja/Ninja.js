//Exercise 1 : Age Difference
let or = 1980
let ruti = 1960

//Exercise 2 : Zip Codes 
let zipcode = prompt("what is your zipcode?");

let regxp =  /^\d{5}$/;

if(regxp.test(zipcode)) {
    console.log ("great")
}

else {
    console.log("wrong")
};

//Exercise 3 : Secret Word
let word = prompt("tell me a word")

let word1 = word.replace(/a/gi, "1");
let word2 = word1.replace(/e/gi, "2");
let word3 = word2.replace(/i/gi, "3");
let word4 = word3.replace(/o/gi, "4");
let word5 = word4.replace(/u/gi, "5");

console.log(word5);





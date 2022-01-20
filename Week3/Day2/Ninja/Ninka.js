//Exercise 2 
let reply = prompt("a string of numbers separated by commas");
let array =reply.split(",");
console.log(array);

let sum = 0;
for (let i=0; i < array.length; i++) {
    sum= sum + Number(array[i]);
}

console.log(sum);

//Exercise 3 : Find Nemo
let reply = prompt("give a sentence containing the word Nemo");
let position = reply.search("Nemo");


console.log("I found Nemo at" + position);
 

//Exercise 4 : Boom
prompt("type a number")

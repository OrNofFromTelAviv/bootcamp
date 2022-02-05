//Exercise 1: Sum Elements
let array = [10, 20, 30, 40, 50, 60]//=210
let sum = array.reduce((prev, current) => prev + current);
console.log(sum);

//Exercise 2 : Remove Duplicates
let names = ["dana", "tomer", "avi", "dan", "dana", "moti", "tomer"]

let uniq = [...new Set(names)];
console.log(uniq)
//I used Set constructor and the spread syntax:

//i can also wtire it like that - 
let names2 = ["sumit","sumit", "anish", "amit","anil","anish"]
let uniq2 = new Set(names2)
console.log(uniq2);

//Exercise 3 : Remove Certain Values
let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]

//with The filter() method 
function NumbersOnly (value) {
    if (typeof (value) === "number") {
        return value
    }
}

let filtered = array.filter(NumbersOnly)
console.log(filtered)


//Exercise 4 : Repeat Please !
let A ="Boom"
let B = A.repeat(3);
console.log(B);


//or with a function + while statment
function repeatStringNumTimes(string, n) {

let repeatedString = "";

while (n > 0) {
    repeatedString += string
    n--
}
return repeatedString


};

repeatStringNumTimes("Boom", 3);


//Exercise 5 : Turtle & Rabbit
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';



turtle = turtle.padStart(startLine.indexOf("-"), " ");
rabbit = rabbit.padStart(startLine.indexOf("-"), " ");

console.log(startLine);
    console.log(turtle);
    console.log(rabbit);


//What happens when you 
    turtle = turtle.trim().padEnd(9, '=');
    //trim removes whitespace from the beginning, and padend will create a line of ======
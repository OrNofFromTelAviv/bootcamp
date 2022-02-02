//Exercise 1 : Scope
// #1

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

//prediction: a is not defined, because it's defined only in the function - local scope. 
// if function excuted - a=3


//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

//prediction: a=0


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//prediction: a is not defined

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//prediction: a =1

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

//prediction: a=5, because of the If Statement 



//Exercise 2 : Ternary Operator
function winBattle(){
    return true;
}

let winBattle2 = () => true;
let experiencePoints


winBattle2() ? experiencePoints = 10 : experiencePoints = 1;
console.log(experiencePoints);




//Exercise 3 : Is It A String ?
let isString = input => typeof input === "string" ? true : false;






//Exercise 4 : Colors
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, i) => console.log(`${i+1}# choice is ${color}.`));


colors.some((item) => item === "Violet") ?console.log("Yeah") :console.log("No");




//Exercise 5 : Colors #2
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

let myColors = () => {

color.forEach((item, i) => {

let order = "";

switch (i) {

    case 0: order = ordinal[1];
    break;

    case 1: order = ordinal[2];
    break;

    case 2: order = ordinal[3];
    break;

    default: order = ordinal[0];
}



console.log(`${i+1}${order} choice is ${item}`);


});
}
myColors();




//Exercise 6 : Bank Details
let bankAmount = 5000
const vat = 0.17
let details = [+200, -100, +50, +200, -300] //50
let sum = details.reduce((total, amount) => total + amount);
let detailsWithVat = (sum*vat)+sum
bankAmount = bankAmount -detailsWithVat
console.log(bankAmount)





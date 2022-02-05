
//Exercise 1 : Find The Sum
//Create a one line function (ie. an arrow function) 
//that receives two numbers as parameters and returns the sum.
let sum = x => y => x+y;
sum(3)(4);

//Exercise 2 : Kg And Grams
//Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
//First, use function declaration and invoke it.
function kgsIntoGrams (k) {
    console.log(`${k}kg is ${k*1000}gr`);  
}
kgsIntoGrams (3);

//Then, use function expression and invoke it.
let kgsIntoGrams = function (k) {
   console.log(`${k}kg is ${k*1000}gr`);
}         
kgsIntoGrams (1);

//Write in a one line comment, the difference between function declaration and function expression.
//my answer: anonymous function and name function + self invoked and not self invoked

//Finally, use a one line arrow function and invoke it.
let kgsIntoGrams = k => k*1000;
kgsIntoGrams(4)



//Exercise 3 : Fortune Teller
//Create a self invoking function that takes 4 arguments: 
//number of children, partner’s name, geographic location, job title.
//The function should display in the DOM a sentence like 
//"You will be a <job title> in <geographic location>, 
//and married to <partner's name> with <number of children> kids."
(function (child, partner, location, job) {
    document.write(`You will be a ${job} in ${location} and married to ${partner} with ${child} kids`);

})(2,"George", "New York", "Programmer");



//Exercise 4 : Welcome
//Create a Bootstrap Navbar in your HTML file.
//In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//The function should add a div in the nabvar, displaying the name of the user and his profile picture.


(function (userName) {

let mainDiv = document.getElementById("navbarSupportedContent")
let userDiv = document.createElement("div")

let img = document.createElement("img")
img.src = "https://parade.com/wp-content/uploads/2021/08/albert-einstein-quotes.jpg"
img.style.height = "50px"
img.style.width = "50px"


let content = document.createTextNode(`  Hey there ${userName}  `);
userDiv.appendChild(content);
userDiv.appendChild(img);


mainDiv.appendChild(userDiv);




})
("Albert")




//Exercise 5 : Juice Bar
//Part I
function makeJuice (size){
    (function (firstIngredient, secondIngredient, thirdIngredient) {
        document.write(`<h3>The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}.</h3>`)
    }) ("Mango", "Dates", "Banana")

}
makeJuice ("small");


//Part II
function makeJuice (size){

    let ingredients = []

    function addIngredients (firstIngredient, secondIngredient, thirdIngredient) {
 ingredients.push(firstIngredient, secondIngredient, thirdIngredient)
    } 

    addIngredients ("mango", "strawberry", "orange")
    addIngredients ("vanilla", "milk", "sugar")

    function displayJuice (){

      let sentence = `The client wants a ${size} juice, containing `
      ingredients.forEach ((item, index) => sentence += `${item}${index < ingredients.length -1 ?", " : "."} `)
        let whereToPut = document.querySelector(".container-fluid")
        whereToPut.innerHTML = sentence
        

    }

    displayJuice ()
}
makeJuice ("big");




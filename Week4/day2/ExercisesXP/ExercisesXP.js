//***Exercise 1 : Information***
//Create a function called infoAboutMe() that takes no parameter.
//The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
function infoAboutme() {
    console.log("I was born and raised in Tel-Aviv")
}
//Call the function.
infoAboutme()

//Part II : function with three parameters
//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.

function infoAboutPerson (personName, personAge, personFavoriteColor) {
    console.log("my name is " + personName + " my age is " + personAge + " and my favorite color is " + personFavoriteColor)
}

infoAboutPerson("David", 45, "Blue")
infoAboutPerson("Josh", 12, "yellow")


//***Exercise 2 : Tips***
//Create a function named calculateTip() that takes no parameter.
function calculateTip() {

    if (bill < 50)
    tip = "tip 20%";

    else if (bill > 50 && bill < 200)
    tip = "tip 15%";

    else 
    tip = "tip 10%";

    return tip;

}
let tip = "";
let bill = parseInt(prompt("what is the bill?"));
calculateTip(bill, tip)
console.log(alert("the bill is " + bill + " and you should " + tip));


//Exercise 3 : Find The Numbers Divisible By 23
function isDivisible() {


    for (i=0; i < 501; i++)
    {
     
    }


    if (i % 23 ===0)
    {
        console.log(i);
    }
};
//I DONT KNOW ????



//Exercise 4 : Shopping List

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill (){
   let totalPrice = 0;

   for (i of shoppingList){
       if (stock[i] > 0) {
           totalPrice += prices[i];
          
        }
     }
       return totalPrice;

   }


   console.log(myBill());


   //Exercise 5 : What’s In My Wallet ?
   function changeEnough(itemPrice, amountOfChange) {

    if amountOfChange >= itemPrice
    return true

    if 

   }

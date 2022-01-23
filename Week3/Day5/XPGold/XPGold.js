//Exercise 1 : Divisible By Three
let numbers = [123, 8409, 100053, 333333333, 7]
let answer = " ";

numbers.forEach(myfunction);

console.log(answer);


function myfunction(number) {
    
    if (number%3===0) {
        answer += "true "
    }

   else{
    answer += "false "
   }
  
}


//Exercise 2 : Attendance
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  let userName = prompt("what is your name?");
  let inTheList = false

for (let name in guestList) { 

        
if (userName === name ) {
    console.log("Hi! I'm " + name + " and I'm from " + guestList[name]);
    inTheList = true;
    break;
} 


else
{inTheList = false 
    console.log ("i'm a guest");
}

}

//why it doesn't stop?


//Exercise 3 : Playing With Numbers
//1. Console.log the sum of all the numbers in the age array.
let age = [20,5,12,43,98,55];

let sum = 0;

for (let i=1; i < age.length; i++) {
  sum += age[i];

}

console.log(sum);

//2. Console.log the highest age in the array.
let age = [20,5,12,43,98,55];
let highestAge = 0;

for (let i=1; i < age.length; i++) {
if (age[i] > highestAge) {
    highestAge = age[i]}
}
  

  
  console.log(highestAge);




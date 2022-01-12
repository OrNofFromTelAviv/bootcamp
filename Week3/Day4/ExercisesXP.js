//Exercise 1: Simple If/Else Statement
let x = 10
let y = 5
if (x>y) {
    console.log("x is the biggest number")
} else {
    console.log("y is the biggest number")
}

//Exercise 2: Chihuahua
let newDog = "Chihuahua";
let length = newDog.length;
console.log(length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog = "Chihuahua") {
    alert("I love Chihuahuas, it’s my favorite dog breed")
} else {
    console.log("I dont care, I prefer cats")
}


//Exercise 3: Even Or Odd
let number = prompt("What is your lucky number?")
if (number % 2 == 0) {
alert(number + " is an even number")
} else
alert(number + " is an odd number")

//Exercise 4: Group Chat
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
let length = users.length


switch (length) {
    case "0":
        console.log("no one is online");
        break;
    case "1":
        console.log(users[0]+ " is online")    
        break;
    case "2":
        console.log(users.slice(0,2) + " are online")    
        break;


  
}




If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
For example, if there are 5 users, it should display:
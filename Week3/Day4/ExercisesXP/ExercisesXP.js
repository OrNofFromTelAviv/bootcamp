//Exercise 1
let x = 10
let y = 5

if (x>y) {
    console.log("x is the biggest number")
} else {
    console.log("y is the biggest number")
}

//Exercise 2
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


//Exercise 3
let number = prompt("What is your lucky number?")

if (number % 2 == 0) {
alert(number + " is an even number")
} else
alert(number + " is an odd number")

//Exercise 4: Group Chat

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
let participants = users.length
console.log(participants)

switch(participants) {
    case 0:
        console.log("no one is online");
        break;
    case 1:
        console.log(users.splice(0)+ " is online");
        break;
    case 2:
        console.log(users.splice(0,2)+ " are online");
        break;   }




console.log(participants)

if (participants > 2){
    let participants = (users.length - 2)
    console.log(participants)
    console.log(users.splice(0,2) + " and " + participants + " more are online")};

    //in this exercise I wasn't sure if i should use Switch of an If condition
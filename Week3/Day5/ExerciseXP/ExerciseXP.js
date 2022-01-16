//Exercise 1 : List Of People
//Part I - Review About Arrays

let people = ["Greg", "Mary", "Devon", "James"]
people.shift();
people.splice(2, 1, "Jason");
people.push ("Or")
console.log(people.indexOf("Mary"));
console.log(people.slice(1,3));
console.log(people);
console.log(people.indexOf("FOO")); /*Return -1 because the placeholder "foo" does not exsit in this array*/
let last = people[(people.length - 1)]


//Part II - Loops
let people = ["Greg", "Mary", "Devon", "Jason", "Or"]
for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}



for (let i=0; i<people.length; i++) {
    if (people[i] == "Jason") {
        break;
    }
    console.log(people[i]);
}


//Exercise 2 : Your Favorite Colors
let Colors = ["Blue", "Red", "White", "Crimson", "Green"]
for (let i=0; i<Colors.length; i++) {
    console.log("my #" + (i + 1) + " choice is " + Colors[i]);
}

let Colors = ["Blue", "Red", "White", "Crimson", "Green"]
let suffixes = ["st", "nd", "rd", "th"]
for (let i=0; i<Colors.length; i++) {
    if (i==0) {
    console.log("my " + (i + 1) + suffixes[0] + " choice is " + Colors[i]);
    continue; }

    if (i==1) {
    console.log("my " + (i + 1) + suffixes[1] + " choice is " + Colors[i]);
    continue; }


    if (i==2) {
    console.log("my " + (i + 1) + suffixes[2] + " choice is " + Colors[i]);
    continue; }


    console.log("my " + (i + 1) + suffixes[3] + " choice is " + Colors[i]);
}


//Exercise 3 : Repeat The Question
let answer= parseInt(prompt("type a number"));
console.log(answer);

while (answer < 10 ){
answer= parseInt(prompt("type a NEW number"));
console.log(answer);

}


//Exercise 4 : Building Management
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

// Console.log the number of floors in the building
console.log(building.numberOfFloors)

//Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);


//Console.log the name of the second tenant and the number of rooms he has in his apartment.
let secondTenant = building.nameOfTenants[1].toLowerCase();
console.log(secondTenant)
console.log(building.numberOfRoomsAndRent[secondTenant][0]);

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


if (building.numberOfRoomsAndRent["sarah"][1] + building.numberOfRoomsAndRent["david"][1] > building.numberOfRoomsAndRent["dan"][1]) 
{
 let newRent = building.numberOfRoomsAndRent["dan"][1] + 200;
 console.log(newRent); 
}

// Exercise 5 : Family
//Create an object called family with a few key value pairs

let family = {
    mother: "Sarah",
    father: "Abraham",
    son: "Isaac", 
    stepbrother: "Ishmael"
};

//Using a for loop, console.log the keys of the object.
for (let key in family) {
    console.log(key);


//Using a for loop, console.log the values of the object.
console.log(family[key]);
}


// Exercise 6
//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let details = {
    my: 'name',
    is: 'Rudolf', 
    the: 'raindeer'
  }



let answer = "";
for (let key in details) {
    answer += key + " " + details[key] + " ";
}
console.log(answer);




//Exercise 7 : Secret Group
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
console.log(names.sort());

let group = "";

for (i=0; i < names.length; i++) {
    group += names[i][0];
}
 
console.log(group);










//Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// What will be the output?
"I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"


//Exercise 2: Display Student Info

const studentObject = {firstName: "Or", LastName: "Nof", City: "Tel-Aviv", Age: 32, scores: {english: 100, math: 90, history: 80}};

function displayStudentInfo ({firstName, LastName, scores: {english, math, history}}) {
    console.log(`Hello ${firstName} ${LastName}. your English score is ${english}, your Math score is ${math} and your history scroe is ${history}.`)
}


displayStudentInfo (studentObject);


//Exercise 3: User & Id
const users = { user1: 18273, user2: 92833, user3: 90315 }

//Using methods taught in class, turn the users object into an array:
let users1 = Object.entries(users);
console.log(users1)
// output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

//Modify the outcome of part 1, by multipling the user’s ID by 2.
let users2 = users1.map(element => [element[0], element[1]*2])
console.log(users2)




//Exercise 4 : Person Class
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
  //What will be the output? Object.  Person {name: 'John'}

  

  //Exercise 5 : Dog Class
  class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  //This constructor (Number 2) will successfully extend the Dog class?
  //only here the the super keyword is well put 
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };




  //Exercise 6 : Challenges
 [2] === [2] False 
 {} === {} False 
 //Two different objects will never compare equally, each of them has its own reference. Array is a kind of object 

//2.What is, for each object below, the value of the property number?
const object1 = { number: 5 }; //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { number: 5}; //5
object1.number = 4; //4

//3.Create a class Animal with the attributes name, type and color

class Animal {
  constructor (name, type, color)
  {
    this.name = name;
    this.type = type;
    this.color = color;
  }

}


//Create a class Mamal that extends from the Animal class. It has a method called sound(). 
//This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) 
//as well as the sound it makes.


class Mamal extends Animal {
  constructor (name, type, color) {
    super (name, type, color)
  }
sound ( soundOfAnimal) {
 return [this.name, this.type, this.color, soundOfAnimal]
}


}

//Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.

let cow = new Mamal ("Cattle", "Angus", "Brown");
cow.sound ("Moooo")
//Exercise 1 : Analyzing
//1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange'] because of the use in spread operator.

//2
const country = "USA";
console.log([...country]);
//output: ["U","S","A"]. because we wrote in the console log "[]", hence array. ans spread syntax let iterables to be spread into smaller bits
//so it's not ["USA"], rather["U","S","A"].

//Bonus
let newArray = [...[,,]];
console.log(newArray);
//output:[undefined, undefined]


//Exercise 2 : Employees
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//1. Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)

users.map (getFirstName);

function getFirstName (element){
    return `hello ${element.firstName}`

}


//2. Using the filter() method, create a new array, containing only the Full Stack Residents.

fullStackResidents = users.filter(checkFullStack);
//A QUESTION: here if i put "let" before the "fullStackResidents" there's an error and it's written that it's alredy defined.
//I am not sure why... 

function checkFullStack (element) {
    if (element.role === 'Full Stack Resident')
    return element
}


//Bonus : Chain the filter method with a map method, 
//to congratulate the Full Stack Residents (ie. “Good job Bradley”, “Good Job Chloe” ect…)

fullStackResidents.map (congratulate);

function congratulate (element) {
    return `Good Job ${element.firstName}`
}



//Exercise 3 : Star Wars
//1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let epicString = epic.reduce(function (prev, curr, index)
{
    return index === 0 ? curr : prev + " " + curr; 
})

console.log(epicString)



//Exercise 4 : Employees #2
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


//Using the filter() method, create a new array, containing the students that passed the course.
let pass = student.filter(passTheCourse)

function passTheCourse (element) {
    if (element.isPassed === true)
  return element;
}

console.log(pass);

//or a shorter way to write it -
let pass = student.filter(element => element.isPassed === true)

//Bonus : Chain the filter method with a map method, to congratulate the students with their name and course name
//(ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)


let congrtasTheStudents = pass.map (txt)

function txt (element) {
    return `Good job ${element.name}, you passed the course in ${element.course}`
}

console.log(congrtasTheStudents);
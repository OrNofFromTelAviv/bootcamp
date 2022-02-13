//Exercise 1 : Print Full Name
const studentObj = {first:"Elie", last:"Schoppik"}

const {first, last} = studentObj



function printFullName ({first, last}) {
   return `Your full name is ${first} ${last}`

}

printFullName(studentObj)




//Exercise 2 : Keys And Values
const obj = {a:"apple", b:"banana", c:"carrot", d:"dounts"}


function keysAndValues(obj) {
    return [Object.keys(obj), Object.values(obj)];
  }




keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

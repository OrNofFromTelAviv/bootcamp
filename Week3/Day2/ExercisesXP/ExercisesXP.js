//Exercise 1
var favFood = "chocolate";
var favMeal = " dinner";
console.log("I eat " + favFood + " at every " + favMeal);

//Exercise 2 - part 1
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
var watchedSeriesLength = watchedSeries.length;
var myWatchedSeries = watchedSeries.toString();
console.log("I watched " + watchedSeriesLength + " series: " + myWatchedSeries);


//Exercise 2 - part 2
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
watchedSeries.splice(2, 1, "friends");
watchedSeries.splice(2, 1, "friends", "true detective")
watchedSeries.unshift("twin peaks");
watchedSeries.splice(1,1);
console.log(watchedSeries);

var char3MoneyHeist = watchedSeries[1];
console.log(char3MoneyHeist.charAt(3));

console.log(watchedSeries);


//Exercise 3
function cToF(celsius)
{
var cTemp = celsius;
var CToFahr= cTemp / 5 * 9 + 32;
var message = cTemp + "°C" + " is " + CToFahr + "°F";
console.log(message);
}

cToF(10);


//Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 34+21=55
// Actual: 55 

a = 2;

console.log(a+b) //second expression
// Prediction: 21+2=23
// Actual: 

// value of c = undefined

console.log(3 + 4 + '5');
// Prediction: 75. because 3 and 4 considered numbers and 5 is like a word. so 3+4=7 and there is no space, so the 7 is adjacent to the digit 5
// Actual: 75


//Exercise 5
typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: null
// Actual: null

"1" + "3"
// Prediction: 13
// Actual: 12

"1" - "3"
// Prediction: null
// Actual: -2 (I googled and understand this is coercion.)

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: null
// Actual: Nan

99 * "hello"
// Prediction: null or Nan? 
// Actual:NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: true false
// Actual: false (now I understand, because both the value and the type should be true. here is not the case, hence - false)


//Exercise 6
5 + "34"
// Prediction: 534. first type is a number, second type is a string
// Actual: 534

5 - "4"
// Prediction: 1. although first type is a number and the second is a string, because of the subtraction ther's a coercion.
// Actual: 1

10 % 5
// Prediction: 0 because 2*5=10, so no reminder 
// Actual: 0

5 % 10
// Prediction: 0
// Actual: 5 (not sure if I got it... Is it bcause you can't even divide 5/10?)

"Java" + "Script"
// Prediction: javaScript
// Actual: javaScript

" " + " "
// Prediction:  
// Actual:  

" " + 0
// Prediction: 0
// Actual: 0

true + true
// Prediction: true
// Actual: 2 (Is it bcasue true=1, so true+true=2. yes?)

true + false
// Prediction: 1 (because if true=1 and false=0 so 1+0=1)
// Actual: 1

false + true
// Prediction: 1 (same like the last one)
// Actual: 1

false - true
// Prediction: -1 (because false=0 and true=1, so 0-1 = -1)
// Actual:

!true
// Prediction: false (because the sign "!" means Not. not true = false)
// Actual: false

3 - 4
// Prediction: -1
// Actual:

"Bob" - "bill"
// Prediction: null
// Actual: Nan

//Write a JavaScript program that recreates the pattern below.
//first by using one loop

for (let i=1; i<=6; i++){
    console.log("*".repeat(i))
};

//then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

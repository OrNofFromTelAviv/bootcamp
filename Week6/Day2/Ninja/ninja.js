//Exercise 1 : Menu

let menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]

  //1. Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
/
  console.log(menu.some (element => element.type === "dessert")
   ? "Yes, we have dessert today" 
   : "Sorry, we don't have dessert today"
   );

//2. Using an array method, check if all the elements in the array are starters.

console.log(menu.every (element => element.type === "starter"));

//3. Using an array method, check if there is at least one element in the array that is a main course
//If not, add a main course of your choice to the array.


if (!(menu.some(element => element.type === "main course")))
{

let main = 
{type: "main course",
name: "Shawarma"};
    


menu.splice (2, 0, main);


};

console.log(menu);

// Using an array method, add a key “vegetarian” (a boolean) to the menu array.
// The value of the key should be true if the name of the course contains at least
// one element from the vegetarian array.
let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

menu.forEach (object => {
    object.vegetarian = "";
});

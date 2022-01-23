//Exercise 1 : Change The Navbar

function ex1 () {

let newDiv = document.getElementById("navBar");
newDiv.setAttribute("id", "socialNetworkNavigation");

let newLi = document.createElement("li");
newLi.innerHTML = '<a href="#">Logout</a>';

newDiv.firstElementChild.appendChild(newLi);

};

//// Bonus - Display the text of first and last li elements
let ul = document.getElementsByTagName("ul")[0];
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);



//Exercise 2 : Users
function ex2 () {

let ul = document.getElementsByTagName("ul");
ul[0].getElementsByTagName("li")[1].textContent = "Ricahrd";



let elements = document.querySelectorAll('ul > li:first-child');
for (let elem of elements) {
elem.textContent = "Or"
}


let endElement = document.querySelectorAll(".list");
endElement.forEach (ul => {
    let heyLi = document.createElement("li");
    heyLi.textContent = "Hey students";
    ul.appendChild(heyLi);
        
    });


 ul[1].removeChild(ul[1].children[1]);
    


//Bonus

ul.classList.add("student_list");
ul[0].classList.add("university", "attendance");

}
//is my answer here correct? i'm not sure, cause i'm not sure where can i cheak/see if it does work




//Exercise 3 : Users And Style

let myDiv = document.querySelector("div");
myDiv.style.backgroundColor = "lightblue";
myDiv.style.padding = "10px";

let users = document.getElementsByTagName("li");
users[0].style.visibility = "hidden";
users[1].style.border ="1px solid black"

let body = document.body;
body.style.fontSize = "3rem";

//Bonus
if (myDiv.style.backgroundColor == "lightblue")
 {
alert("hello " + users[0].textContent + " and " + users[1].textContent )
 }



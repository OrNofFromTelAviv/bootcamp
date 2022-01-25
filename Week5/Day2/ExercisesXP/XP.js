//Exercise 1 : Change The Article
let h1 = document.getElementsByTagName("h1");
console.log("h1");

let  lastParagraph = document.getElementsByTagName("p")[3];
lastParagraph.remove();

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let TheChocolate = document.getElementsByTagName("h2")[0];
TheChocolate.addEventListener("click", function(){
    TheChocolate.style.background = "red";
});

// A QUESTION -
// when i wrote the same code WITHOUT the [0] it gave me an error. I understand that it was because it was an 
//array and not an the element itself. yes? but why H2 is an array? H2 isn't a html collection?
//or is it because **getElementsByClassName** brings back array? 
 

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let history = document.getElementsByTagName("h3")[0];
history.addEventListener("click", function(){
    history.style.display = "none";
});

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.addEventListener("click", boldFunction);

function boldFunction () {
let paragraphs = document.querySelectorAll("p");
for (let i=0; i < paragraphs.length; i++) {
paragraphs[i].style.fontWeight = "bold";}
};

document.body.appendChild(btn);

//A QUESTION - I made a loop here bacsue of the querySelectorAll. is there another way?
// is it better to use here ForEach? if so - how exaxtly fo you write it?

//When you hover on the h1, set the font size to a random pixel size between 0 to 100

let facts = document.getElementsByTagName("h1")[0];
facts.addEventListener("mouseover", randomFunction);

function randomFunction () {
facts.style.fontSize = Math.floor(Math.random()*100)+10 +"px";
};

//When you hover on the 2nd paragraph, it should fade out

let AfterTheEuropean = document.getElementsByTagName("p")[1];
AfterTheEuropean.addEventListener("mouseover", fadeFunction);

function fadeFunction () {
AfterTheEuropean.style.opacity = "0.2", transition =".15s ease-in-out";
};



//Exercise 2 : Work With Forms
let form = document.forms[0];
console.log(form);

let firstInput = document.getElementById("fname");
console.log(firstInput);

let secondInput = document.getElementById("lname");
console.log(secondInput);



let form = document.forms[0];

let firstElem = form.elements.fname;
console.log(firstElem);

let secondElem = form.elements.lname;
console.log(secondElem);

//submit event listener
//get the values of the input tags
//create an li per input value and append

let submit = document.getElementById("submit");
let input1 = document.getElementById("fname");
let ul = document.querySelector("ul")[0];

submit.addEventListener("click", function (e) {
    if (input1.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input1.value))
        ul.appendChild(li);
        input1.value="";
    
    }
})


//i don't know why it's not working... 
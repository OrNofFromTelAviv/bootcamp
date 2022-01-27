
//Exercise 1 : Move The Box

let container = document.getElementById("container");
let animate = document.getElementById("animate");
let position = 0;



function myMove (){

       let movingAnimation= setInterval (stop, 10);
       
       function stop (){
           if (position===350) {
               clearInterval(movingAnimation)
           } else {
               position ++
               animate.style.top = position + "px";
               animate.style.left = position + "px";
           }
           }
        };

       
// Another option to stop - by adding a button and a clearInterval function 

let container = document.getElementById("container");
let animate = document.getElementById("animate");
let position = 0;


let stopButton = document.createElement("button");
stopButton.innerHTML= "Stop Me";
document.body.appendChild(stopButton);

stopButton.addEventListener ("click", pause);

let movingAnimate = setInterval (function () {
    position ++
    animate.style.top = position + "px";
    animate.style.left = position + "px" }, 10);

function myMove () {movingAnimate};

function pause (){
    clearInterval(movingAnimate)
};



//Exercise 2: Drag & Drop

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}


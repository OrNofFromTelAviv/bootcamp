//Exercise 1 : Change The Navbar

<body>
<div id="navBar">
<ul>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">My Friends</a></li>
    <li><a href="#">Messenger</a></li>
    <li><a href="#">My Pics</a></li>
</ul>
</div>

<script>



</script>

</body>




let newDiv = document.getElementById("navBar");

setAttribute ("id", "socialNetworkNavigation");

const li = document.createElement("li");
const textNode = document.createTextNode("Logout");
li.appendChild(textNode);
document.ul.appendChild(li);

//Bonus
let li1 = document.querySelector("ul").firstElementChild.textContent;
console.log("li1");

let li2 = document.querySelector("ul").lastElementChild.textContent;
console.log("li2");


//Exercise 2 : Users


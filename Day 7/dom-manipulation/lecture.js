document.getElementById("main-navigation");
document.getElementsByClassName("navbar");

// ------------

var firstBtn = document.querySelector(".btn");
var btns = document.querySelectorAll(".btn");
console.log(btns);
console.log(btns[3]);

// ------------

var jumboNode = document.querySelector(".jumbotron");
jumboNode.querySelector(".btn")
// or
document.querySelector(".jumbotron .btn");

// ------------

jumboNode.children
jumboNode.children[0]
jumboNode.parentElement

// ------------

var img = document.querySelector(".jumbotron img");
img.setAttribute("src", "http://lorempixel.com/300/200/animals");
img.removeAttribute("alt");

// ------------

var navItem = document.querySelector(".navbar .nav-item:first-child");
var navItem = document.querySelector(".navbar").children[0];
var navItem = document.querySelector(".navbar").firstChild;

// ------------

// Use $0 to select the current selected element in the Chrome Web Dev Tools

$0.classList.add("active");
$0.classList.remove("active");
// $0.classList.includes("active") ? remove : add;
$0.classList.toggle("active");

// ------------

$0.classList.add("btn-danger");
$0.style.backgroundColor = "red";

// ------------

$0.innerText
// "Learn more »"
$0.innerText = "My SUPER button"
// "My SUPER button"

// ------------

$0.innerHTML = "<span>Hello</span>"

// ------------

$0.remove()

// ------------

var myDiv = document.querySelector(".my-div");
var myDiv2 = document.createElement("div");
myDiv2.innerHTML = "<p>Hello</p>"
myDiv.append(myDiv2);
myDiv.appendChild(myDiv2);
myDiv.prepend(myDiv2);
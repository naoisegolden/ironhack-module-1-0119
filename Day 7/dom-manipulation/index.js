var btn = document.querySelector(".btn");

btn.addEventListener("click", function (event) {
    console.log("Button clicked!");
});
btn.addEventListener("mouseenter", function() {
    console.log("Mouse entered!");
});
btn.addEventListener("mouseleave", function() {
    console.log("Mouse left!");
});

// ------------

document.querySelector(".navbar .nav-item").addEventListener("click", function (event) {
    console.log('nav target', event.target);
    console.log('nav current target', event.currentTarget);

    event.stopPropagation();
    event.preventDefault();
    var placeUrl = window.prompt('Where do you want to go?');
    window.location.href = placeUrl;
});

document.querySelector('body').addEventListener('click', function (event) {
    console.log('body target', event.target);
    console.log('body current target', event.currentTarget);
})

// ------------

var btn = document.querySelector(".jumbotron .btn");

// var type = "click";
// var clickHandler = function(event) {
//     event.preventDefault();
//     var placeUrl = window.prompt('Where do you want to go?');
//     window.location.href = placeUrl;
// };

btn.addEventListener("click", function (event) {
    event.preventDefault();
    var placeUrl = window.prompt('Where do you want to go?');
    window.location.href = placeUrl;
});

console.log("JS finished loading");

// ------------

// EXERCISE
// Show and hide sections in your personal page using some of these:
// var element = document.querySelector()
// element.addEventListener()
// element.style 
// element.classList
// element.classList.add
// element.classList.remove
// element.classList.toggle


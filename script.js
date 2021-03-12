console.log("hello world")

// variables are the ingredients

// strings
var myName="Jenn";
// numbers
let myNumber=10;
// booleans
let isItDarkOutside=false;
let isItLightOutside=true;

// conditionals
if (isItDarkOutside){
    // change the website to dark mode
}else{
    // change the website to light mode
}
// functions
function myRecipe(){
    // instructions for what to do
}
myRecipe();

// define our first variable
// when someone clicks on the red circle, we want the bg to turn red

let redCircle= document.querySelector(".redcircle");
// what happens when someone interacts with the red circle
function turnRed(){
    document.body.style.background ="red";
   


}
// add an event Listener
// when someone clicks on the red circle, change the background red

redCircle.addEventListener("click",turnRed);
// defining variable blue circle
let blueCircle= document.querySelector(".blue-circle");
function turnBlue(){
        document.body.style.background="blue";
}

blueCircle.addEventListener("mouseover",turnBlue)


let whiteCircle= document.querySelector(".white-circle");
function turnWhite(){
        document.body.style.background="#fff";
        document.body.style.color="pink";
}
whiteCircle.addEventListener("mouseover",turnWhite)

let blackCircle= document.querySelector(".black-circle");
function turnGrey(){
        document.body.style.background="#fff";
}
blackCircle.addEventListener("click",turnWhite)

// users hover on the word corner cat appears
let flyingCat=document.querySelector(".cat")
let hoverCorner=document.querySelector(".show-cat");

hoverCorner.addEventListener("mouseover",function(){
    flyingCat.classList.add('active');
})
hoverCorner.addEventListener("mouseout",function (){
    flyingCat.classList.remove('active');
})




// dog image
let dogs = document.querySelector(".dogs");

// the word halfway
let increaseDogImage = document.querySelector('.bigger-dogs');

increaseDogImage.addEventListener('mouseover', function() {
    dogs.classList.add("active");
})

increaseDogImage.addEventListener('mouseout', function() {
    dogs.classList.remove("active");
})
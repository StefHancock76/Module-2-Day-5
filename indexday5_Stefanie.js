//Qasim did these in class 07-24-2023
//let sub = document.createElement("h2");
//sub.innerText = "Random Pic";
//sub.id = "subheading";

//let myImage = document.createElement("img");
//myImage.src = "https://picsum.photos/200/300";
//myImage.alt = "This is an image";
//myImage.style.border = "3px solid red";
//myImage.style.display = "block";
//myImage.style.margin = "20px";
//document.body.append(sub);
//document.querySelector('h2').append(myImage)

//My assignment for 2.5 JS DOM Manipulation and Events.
let inputOne = document.createElement("input");
let inputTwo = document.createElement("input");
let showName = document.createElement("button");
showName.innerText = "Click me, Maybe I'll work";
showName.addEventListener("click", displayName);
let fullName = document.createElement("h2");
fullName.innerText = "No Name";

document.body.append(inputOne);
document.body.append(inputTwo);
document.body.append(showName);
document.body.append(fullName);

function displayName(){
  fullName.innerText = Number(inputOne.value) + Number(inputTwo.value)
}

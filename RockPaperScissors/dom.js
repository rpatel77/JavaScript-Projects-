
//DOM BASICS 
const container = document.getElementById("container");

// red paragraph 
const paragraph1 = document.createElement("p");
paragraph1.textContent = "Hey I'm red!";
paragraph1.style.color = "red";
container.appendChild(paragraph1);

// blue h3 heading 
const heading3 = document.createElement("h3");
heading3.textContent = "I’m a blue h3!"; // using innerHTML is dangerous, can lead to XSS attacks
heading3.style.color = "blue";
container.appendChild(heading3)

// <div> with black border and pink bg color and elements inside it 
const div = document.createElement("div");
// div.setAttribute("style", "border : 1px solid black; background : pink"); <---- need to have a id for the tag  
div.setAttribute("style", "border: 1px solid black; background-color: pink;");
const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";
const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
div.appendChild(heading1);
div.appendChild(paragraph2);
container.appendChild(div);

const btn = document.querySelector("#button1");
btn.onclick = () => {console.log("Button 1 clicked!")};

const btn2 = document.querySelector("#button2");
btn2.addEventListener("click", function(e) {
    console.log(e);
});










//Creating and Deleting Elements

var h1 = document.createElement("h1");
h1.textContent = "hey";
h1.classList.add("makeitred");

//we make h1 then give content then give class now we have to fix on html body tag for that  we use this

document.querySelector("body").appendChild(h1);

//second example

var img = document.createElement("img");

img.src =
  "https://images.unsplash.com/photo-1739911013984-8b3bf696a182?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8";

document.querySelector("body").appendChild(img);

//removing html some part

document.querySelector("body").removeChild(img);

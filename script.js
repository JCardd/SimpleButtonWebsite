const colors = ["red", "green", "blue", "purple", "pink", "black", "maroon", "orange"];

function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}

for (let i = 0; i < colors.length; i++) {
  let element = document.createElement("button");
  let text = document.createTextNode(colors[i]); //changes text
  element.style.color = colors[i]; //changes text color
  element.id = String(i);

  element.appendChild(text);
  document.body.appendChild(element);
  element.addEventListener("click", function() {
    changeBgColor(colors[i]);
  });
  
}





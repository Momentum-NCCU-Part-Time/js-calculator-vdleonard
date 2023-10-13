console.log("Hello");

let buttons = document.querySelectorAll("button");
console.log(buttons);

let display = document.querySelectorAll("#display");

let displayTextHolder = " ";


console.log(buttons[0].classList);

for (let button of buttons) {
  button.addEventListener("click", function(buttonClick){
    console.log(buttonClick.target.textContent);

    let displayText = document.createElement("p");
    displayText.innerText = buttonClick.target.textContent;
    
    if (buttonClick.target.textContent === "AC"){
      displayTextHolder = "0";
      
    
    } else 
    
    displayTextHolder = displayTextHolder += displayText.innerText;
    document.getElementById("display").textContent = displayTextHolder;
    console.log("display text:" + displayText.innerText);
    
  });
}


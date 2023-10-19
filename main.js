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



    if (buttonClick.target.classList.contains("button-number")){
      console.log("Number! " + buttonClick.target.textContent)
      displayTextHolder = displayTextHolder += displayText.innerText;
      document.getElementById("display").textContent = displayTextHolder;
      console.log("display text:" + displayText.innerText);
      return;
    } 


    if (buttonClick.target.classList.contains("button-operation")){
      console.log("Opperator! " + buttonClick.target.textContent)
      displayTextHolder = displayTextHolder += displayText.innerText;
      document.getElementById("display").textContent = displayTextHolder;
      console.log("display text:" + displayText.innerText);
      return;
    } 

    
    if (buttonClick.target.textContent === "AC"){
      displayTextHolder = "";
      document.getElementById("display").textContent = displayTextHolder;
      console.log("display text:" + displayText.innerText);
      return;
    
    } 

    if (buttonClick.target.textContent === "="){
      console.log(" = " + buttonClick.target.textContent)
      console.log(eval(displayTextHolder));
      let result = eval(displayTextHolder);
      document.getElementById("display").textContent = result;
      displayTextHolder = "";
      return;
    
    } 
    
   
    
    
  });






}


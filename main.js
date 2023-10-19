console.log("Hello");

let buttons = document.querySelectorAll("button");
console.log(buttons);

let display = document.querySelectorAll("#display");
let displayValue = "";
let displayTextHolder = " ";
let decimalCheck = false;

console.log(buttons[0].classList);

for (let button of buttons) {
  button.addEventListener("click", function(buttonClick){
    console.log(buttonClick.target.textContent);

    let displayText = document.createElement("p");
    displayText.innerText = buttonClick.target.textContent;



    if (buttonClick.target.classList.contains("button-number")){
      console.log("Number! " + buttonClick.target.textContent)
      displayTextHolder = displayTextHolder += displayText.innerText;
      displayValue = displayValue += displayText.innerText;
      document.getElementById("display").textContent = displayTextHolder;
      console.log("display text:" + displayTextHolder);
      console.log("display value:" + displayValue);
      return;
    } 


    if (buttonClick.target.classList.contains("button-operation")){
      console.log("Opperator! " + buttonClick.target.textContent)
      displayTextHolder = displayTextHolder += displayText.innerText;
      displayValue = displayValue += displayText.innerText;
      document.getElementById("display").textContent = displayTextHolder;
      decimalCheck = false;
      console.log(decimalCheck + " Decimal check removed");
      console.log("display text:" + displayTextHolder);
      console.log("display Value:" + displayValue);
      return;
    } 

    
    if (buttonClick.target.textContent === "AC"){
      displayTextHolder = "";
      displayValue = "";
      document.getElementById("display").textContent = displayTextHolder;
      decimalCheck = false;
      console.log(decimalCheck + " Decimal check removed");
      console.log("display text:" + displayTextHolder);
      console.log("display Value:" + displayValue);
      return;
    
    } 

    if (buttonClick.target.textContent === "del"){
      displayTextHolder = displayTextHolder.slice(0,-1);
      displayValue = displayValue.slice(0,-1);
      document.getElementById("display").textContent = displayTextHolder;
      decimalCheck = false;
      console.log(decimalCheck + " Decimal check removed");
      console.log("display text:" + displayTextHolder);
      console.log("display value:" + displayValue);
      return;
    
    } 

    if (buttonClick.target.textContent === "="){
      console.log(" = " + buttonClick.target.textContent)
      let result = eval(displayValue);
      document.getElementById("display").textContent = result;
      displayTextHolder = "";
      decimalCheck = false;
      console.log(decimalCheck + " Decimal check removed");
      console.log(" Display Text:" + displayTextHolder);
      console.log(" Display Value:" + result);
      return;
    
    } 
    
    if (buttonClick.target.classList.contains("button-decimal")){

          if (decimalCheck === false) {
            console.log("decimal " + buttonClick.target.textContent)
            displayTextHolder = displayTextHolder += displayText.innerText;
            displayValue = displayValue += displayText.innerText;
            document.getElementById("display").textContent = displayTextHolder;
            console.log("display text:" + displayTextHolder);
            console.log("display value:" + displayValue);
            decimalCheck = true;
            console.log(decimalCheck + " Decimal added");
            return;
          } else {
          console.log(decimalCheck + " Return");
          return;

        }
    } 

   
    
    
  });






}


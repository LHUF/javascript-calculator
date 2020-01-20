let displayValue;
calcDisplay = document.getElementById("display");
calcButtonClass = document.getElementsByClassName("calcButton");

function add(a,b){
return a + b;
}

function sub(a,b){
return a - b;
}

function multiply(a,b){
return a * b;
}

function divide(a,b){
return a / b;
}

function operate(num1, num2, operation){
let result;
switch (operation) {
    case add: 
    result = add(num1, num2);
    break;
    case subtract:
    result = sub(num1, num2);
    break;
    case multiply:
    result = multiply(num1, num2);
    break;
    case divide:
    result = divide(num1, num2);
    break;
    }
return result;
}

function userInput(){
let input = this.getAttribute("data-number");
if(input === "cancel") calcDisplay.value = "";
else calcDisplay.value += input;
displayValue = calcDisplay.value;
} 

for (let i = 0; i < calcButtonClass.length; i++) {
    calcButtonClass[i].addEventListener('click', userInput, false);
}


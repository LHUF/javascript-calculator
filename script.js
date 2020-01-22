let displayValue = 0;
let userOperation;
let workingNum;


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

calcDisplay = document.getElementById("display");
function userInput(){
let input = this.getAttribute("data-number");
if(input === null) return;
calcDisplay.value += input;
displayValue = parseInt(calcDisplay.value);
}

calcButton = document.getElementsByClassName("calcButton");
for (let i = 0; i < calcButton.length; i++) {
    calcButton[i].addEventListener('click', userInput, false);
}

addBtn = document.getElementById("add");
addBtn.addEventListener("click", userAdd, false);
function userAdd(){
    workingNum = displayValue;
    calcDisplay.value = "";
    userOperation = "addition";
}

subBtn = document.getElementById("subtract");
subBtn.addEventListener("click", userSub, false);
function userSub(){
    workingNum = displayValue;
    calcDisplay.value = "";
    userOperation = "subtraction";
}

multBtn = document.getElementById("multiply");
multBtn.addEventListener("click", userMult, false);
function userMult(){
    workingNum = displayValue;
    calcDisplay.value = "";
    userOperation = "multiplication";
}

divBtn = document.getElementById("divide");
divBtn.addEventListener("click", userDiv, false);
function userDiv(){
    workingNum = displayValue;
    calcDisplay.value = "";
    userOperation = "division";
}

equalsBtn = document.getElementById("equals")
equalsBtn.addEventListener("click", userEqual, false);
function userEqual(){
    if(userOperation === "addition"){
        calcDisplay.value = `${add(workingNum, displayValue)}`;
        displayValue = parseInt(calcDisplay.value);
    }
    if(userOperation === "subtraction"){
        calcDisplay.value = `${sub(workingNum, displayValue)}`;
        displayValue = parseInt(calcDisplay.value);
    }
    if(userOperation === "multiplication"){
        calcDisplay.value = `${multiply(workingNum, displayValue)}`;
        displayValue = parseInt(calcDisplay.value);
    }
    if(userOperation === "division"){
        calcDisplay.value = `${divide(workingNum, displayValue)}`;
        displayValue = parseInt(calcDisplay.value);
    }
}

cancelBtn = document.getElementById("allCancel");
cancelBtn.addEventListener("click", userCancel, false);
function userCancel(){
    workingNum = 0;
    displayValue = 0;
    calcDisplay.value = "";
    userOperation = undefined;
}

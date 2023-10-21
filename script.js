//CALCULATE AND MATH LOGIC
function add(a, b) {
return a + b;
}

function subtract(a ,b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return int1 = add(a, b);
    case "-":
      return int1 = subtract(a, b);
    case "*":
      return int1 = multiply(a, b);
    case "/":
      return int1 = divide(a, b);
  }
}


//GLOBAL VARS
let int1;
let int2;
let operator;
let isInt1 = true;


//OPERATOR COLOR RESET FUNCTION
function operatorClear() {
  for (let i = 0; i < operators.length; i++) {
    operators[i].style.backgroundColor = "khaki";
  }
}

//UI LOGIC
const display = document.getElementById("display");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const clearButton = document.getElementById("clear");

//clear 
clearButton.addEventListener("click", function() {
  int1 = undefined;
  int2 = undefined;
  operator = '';
  display.textContent = '';
  operatorClear();
  isInt1 = true;
});

//number listeners
for (let i = 0; i < numbers.length; i++) {
  numbers[i].textContent = i + 1;
  numbers[i].addEventListener("click", function() {
    display.textContent += numbers[i].textContent;
    operatorClear();
  });
}

//operator listeners
for (let i = 0; i < operators.length; i++) {
  let selected = false;
  operators[i].addEventListener("click", function() {
    selected = true;
    operators[i].style.backgroundColor = "rgb(166, 158, 84)";
    operand = operators[i].textContent;
    int1 = display.textContent;
    isInt1 = false;
  });
}

//EQUAL SIGN LOGIC
const equals = document.getElementById("equals");
equals.addEventListener("click", function() {
  display.textContent = calculate(int1, int2, operator);
});
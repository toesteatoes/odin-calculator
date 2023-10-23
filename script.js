//CALCULATE AND MATH LOGIC
function add(a, b) {
return a + b;
}

function subtract(a, b) {
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
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}


//GLOBAL VARS
let int1;
let int2;
let lastOperation;
let operator;
let isInt1 = true;
let shouldClear;


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
  lastOperation = undefined;
  operator = '';
  display.textContent = '';
  operatorClear();
  isInt1 = true;
});

//number listeners
for (let i = 0; i < numbers.length; i++) {
  numbers[i].textContent = i + 1;
  numbers[9].textContent = 0;
  numbers[10].textContent = '.';
  numbers[i].addEventListener("click", function() {
    if (shouldClear) {
      display.textContent = '';
      shouldClear = false;
    }
    display.textContent += numbers[i].textContent;
    if (isInt1) {
      int1 = parseFloat(display.textContent);
    } else {
      int2 = parseInt(display.textContent);
      lastOperation = calculate(int1, int2, operator);
    }
    operatorClear();
  });
}


//operator listeners
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {
    if (lastOperation !== undefined) {
      int1 = lastOperation;
    }
    operators[i].style.backgroundColor = "rgb(166, 158, 84)";
    operator = operators[i].textContent;
    isInt1 = false;
    shouldClear = true;
    console.log(int1, int2, lastOperation, operator);
  });
}

//EQUAL SIGN LOGIC
const equals = document.getElementById("equals");
equals.addEventListener("click", function() {
  display.textContent = calculate(int1, int2, operator);
  int1 = calculate(int1, int2, operator);
  int2 = undefined;
  isInt1 = false;
});
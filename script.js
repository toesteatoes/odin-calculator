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

let int1;
let int2;
let operand;

function calculate(a, b, operand) {
  switch (operand) {
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


const display = document.getElementById("display");
const buttons = document.getElementsByClassName("number");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].textContent = i + 1;
  buttons[i].addEventListener("click", function() {
    display.textContent += buttons[i].textContent;
  });
}
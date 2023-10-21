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


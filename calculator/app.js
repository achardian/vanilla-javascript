const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const output = document.getElementById("output");
const deleteBtn = document.getElementById("del");
const resetBtn = document.getElementById("reset");
const equalBtn = document.getElementById("equal");
let operationDesc = "";

// checking if operation started with operators
function checkOperationDesc() {
  const operators = ["+", "*", "/"];
  if (operators.includes(operationDesc.slice(0, 1))) {
    operationDesc = operationDesc.slice(1, operationDesc.length);
    if (operationDesc.length === 0) {
      operationDesc += 0;
    }
  } else {
    return;
  }
}

// calculate operation
function evalOperation() {
  const result = eval(operationDesc);
  operationDesc = result.toString();
  output.innerHTML = operationDesc;
}

// dealing with buttons
function addButtonValueToOperation(btn) {
  btn.addEventListener("click", function (event) {
    operationDesc += this.innerHTML;
    checkOperationDesc();
    output.innerHTML = operationDesc;
  });
}

equalBtn.addEventListener("click", evalOperation);

nums.forEach((num) => {
  addButtonValueToOperation(num);
});

operators.forEach((operator) => {
  addButtonValueToOperation(operator);
});

deleteBtn.addEventListener("click", function (event) {
  operationDesc = operationDesc.slice(0, operationDesc.length - 1);
  output.innerHTML = operationDesc;
});

resetBtn.addEventListener("click", function () {
  operationDesc = "";
  output.innerHTML = 0;
});

// dealing with keyboard
window.addEventListener("keydown", function (event) {
  const numsAndOperators = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "*",
    "/",
  ];

  if (numsAndOperators.includes(event.key)) {
    operationDesc += event.key;
    checkOperationDesc();

    output.innerHTML = operationDesc;
  } else if (event.key === "Backspace") {
    operationDesc = "";
    output.innerHTML = 0;
  } else if (event.key === "Enter" || event.key === "=") {
    event.preventDefault();
    evalOperation();
  } else {
    return;
  }
});

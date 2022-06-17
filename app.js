// Calculator Class
class Calculator {
  constructor(_previousOperandTextElement, _currentOperandTextElement) {
    this.previousOperandTextElement = _previousOperandTextElement;
    this.currentOperandTextElement = _currentOperandTextElement;
  }
  //   Clear Button
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  //   Delete Button
  delete() {}

  //   Append Last Number
  appendNumber(number) {}

  //   Choose an operation
  chooseOperation(operation) {}

  //   Update the Display Element
  updateDisplay() {}
}

// All constant
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

// Instantiate new calculator class
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// Loop through all the number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculator;
  });
});

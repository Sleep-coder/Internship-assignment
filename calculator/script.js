const buttons = [
  ["7", "8", "9", "+"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "*"],
  ["0", ".", "=", "/"],
  ["C", "<"],
];
const keysDiv = document.getElementById("keys");

buttons.forEach((row) => {
  row.forEach((btn) => {
    const button = document.createElement("button");
    button.textContent = btn;
    if (isNaN(btn) && btn !== ".") button.className = "operator-btn";
    button.onclick = () => handleButton(btn);
    keysDiv.appendChild(button);
  });
});

function handleButton(btn) {
  if (btn === "=") return calculate();
  if (btn === "C") return clearDisplay();
  if (btn === "<") return backSpace();
  appendToDisplay(btn);
}

const display = document.getElementById("display");
let shouldClearDisplay = false;

function isOperator(input) {
  return ["+", "-", "*", "/"].includes(input);
}

function appendToDisplay(input) {
  if (display.value === "Error") {
    display.value = "";
    shouldClearDisplay = false;
  }

  if (shouldClearDisplay) {
    if (isOperator(input)) {
    } else {
      display.value = "";
    }
    shouldClearDisplay = false;
  }

  if (isOperator(input) && isOperator(display.value.slice(-1))) {
    display.value = display.value.slice(0, -1) + input;
    return;
  }

  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
    shouldClearDisplay = true;
  } catch (error) {
    display.value = "Error";
    shouldClearDisplay = true;
  }
}

function clearDisplay() {
  display.value = "";
  shouldClearDisplay = false;
}

function backSpace() {
  display.value = display.value.slice(0, -1);
  shouldClearDisplay = false;
}

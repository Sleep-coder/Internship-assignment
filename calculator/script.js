const display = document.getElementById("display");
let shouldClearDisplay = false;

function isOperator(input) {
  return ["+", "-", "*", "/"].includes(input);
}

function appendToDisplay(input) {
  // Clear error state if present
  if (display.value === "Error") {
    display.value = "";
    shouldClearDisplay = false;
  }

  // Handle post-calculation state
  if (shouldClearDisplay) {
    if (isOperator(input)) {
    } else {
      display.value = "";
    }
    shouldClearDisplay = false;
  }

  display.value += input;
}

function clearDisplay() {
  display.value = "";
  shouldClearDisplay = false;
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

function backSpace() {
  display.value = display.value.slice(0, -1);
  shouldClearDisplay = false;
}

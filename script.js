let numberA = 0;
let operator = "";
let numberB = 0;


function add(a, b) {
    const addResult = a + b;
    return addResult
}

function subtract(a, b) {
    const subtractResult = a - b;
    return subtractResult;
}

function multiply(a, b) {
    const multiplyResult = a * b;
    return multiplyResult;
}

function divide(a, b) {
    if (b === 0) {
        return ("You can't divide with 0, please try with another number.");
    }
    const divideResult = a / b;
    return divideResult;
}

function operate(operator, numberA, numberB) {
    if (operator === "+" ) {
       return add(numberA, numberB);
    }
}
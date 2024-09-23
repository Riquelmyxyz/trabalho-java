let currentImput = '';
let operation = '';
let previousImput = '';

function appendNumber(number) {
    currentImput += number;
    updateDisplay ();
}

function setOperation9(op) {
    if (currentImput === '') return;
    if (previousImput !== '') {
        calculate();
    }
    operation = op;
    previousImput = currentImput;
    currentImput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousImput);
    const current = parseFloat (currentImput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operantion) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': result = prev / current; break;
        default: return
    }
    currentImput = result;
    operantion - '';
    previousImput = '';
    updateDisplay ();
}

function clearDisplay() {
    currentImput = '';
    operantion = '';
    previousImput = '';
    updateDisplay();
}
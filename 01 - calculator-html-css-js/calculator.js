const display = document.getElementById('display')
let resultGenerated = false;
let points = true;
const history = [];

function checkCondicion(element) {
    if (element == '+' || element == '-' || element == 'x' || element == '/') {
        return true;
    } else {
        return false
    }
}

function clearMemory() {
    points = true;
    display.innerHTML = 0;
    display.style.fontSize = "1.5em";
}

function showHistory() {
    if (history.length === 0) {
        display.innerHTML;
    } else {
        display.style.fontSize = "1em";
        display.innerHTML = history.reverse();
        history.reverse()
    }
}

function addHistory(expression) {
    if (history.length === 3) {
        history.shift()
        history.push(expression)
    } else {
        history.push(expression)
    }
}

function insertOption(element) {
    let atual = display.innerHTML;
    display.style.fontSize = "1.5em";

    if (element == '.') {
        if (points === true) {
            points = false;
        } else {
            return;
        }
    }

    if (checkCondicion(element)) {
        points = true;
    }

    if (atual.length === 15) {
        return;
    }

    if ((checkCondicion(atual[atual.length - 1])) && (checkCondicion(element))) {
        atual = atual.slice(0, -1);
    }

    if (parseInt(atual) === 0 || (checkCondicion(atual))) {
        display.innerHTML = element;
    } else {
        if (resultGenerated === true) {
            resultGenerated = false;
            display.innerHTML = element;
        } else {
            display.innerHTML = atual + element;
        }
    }
}

function calculate() {
    let expression = display.innerHTML;

    if (expression) {

        if (checkCondicion(expression[expression.length - 1])) {
            expression = expression.slice(0, -1);
        }

        if (expression.includes('x')) {
            expression = expression.replace('x', '*');
        }

        let result = eval(expression)
        resultGenerated = true;
        points = true;

        if (result === Infinity) {
            const msg = 'Não é possível dividir por zero'
            display.style.fontSize = "1em";
            display.innerHTML = msg;
        } else {

            if (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) {
                const historyExpression = expression + '=' + result
                addHistory(historyExpression)
                display.innerHTML = result;
            }
        }
    }
}
let resultGenerated = false;
let points = true;
let history = [];

function clearMemory() {
    points = true;
    document.getElementById('display').innerHTML = 0;
    document.getElementById('display').style.fontSize = "1.5em";
}

function showHistory() {
    if (history.length === 0) {
        document.getElementById('display').innerHTML;
    } else {
        document.getElementById('display').style.fontSize = "1em";
        document.getElementById('display').innerHTML = history.reverse();
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
    let atual = document.getElementById('display').innerHTML;
    document.getElementById('display').style.fontSize = "1.5em";

    if (element == '.') {
        if (points === true) {
            points = false;
        } else {
            return;
        }
    }

    if (element == '+' || element == '-' || element == 'x' || element == '/') {
        points = true;
    }

    if (atual.length === 15) {
        return;
    }

    if ((atual[atual.length - 1] == '+' || atual[atual.length - 1] == '-' || atual[atual.length - 1] == 'x' || atual[atual.length - 1] == '/') && (element == '+' || element == '-' || element == 'x' || element == '/')) {
        atual = atual.slice(0, -1);
    }

    if (parseInt(atual) === 0 || (atual == '+' || atual == '-' || atual == 'x' || atual == '/')) {
        document.getElementById('display').innerHTML = element;
    } else {
        if (resultGenerated === true) {
            resultGenerated = false;
            document.getElementById('display').innerHTML = element;
        } else {
            document.getElementById('display').innerHTML = atual + element;
        }
    }
}

function calculate() {
    var expression = document.getElementById('display').innerHTML;

    if (expression) {

        if (expression[expression.length - 1] == '+' || expression[expression.length - 1] == '-' || expression[expression.length - 1] == 'x' || expression[expression.length - 1] == '/') {
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
            document.getElementById('display').style.fontSize = "1em";
            document.getElementById('display').innerHTML = msg;
        } else {

            if (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) {
                const historyExpression = expression + '=' + result
                addHistory(historyExpression)
                document.getElementById('display').innerHTML = result;
            }
        }
    }
}
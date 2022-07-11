const defaultResult = 0;

let currentResult = defaultResult;

let logEntries = [];

//Generates and prints the calculation log on the screen
function createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
    const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription);
}

/*
Description: 
Params: 
Output:
*/
function getUserInput () {
    return parseInt(usrInput.value);
}

function writeToLog (operator, prevResult, userInput, finalResult) {
    const logEntry = {
        operator,
        prevResult,
        userInput,
        result: finalResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult (operator) {

    const enteredNumber = getUserInput();

    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/' || !enteredNumber) {
        alert('Invalid Operation!');
        return;
    }

    const initialResult = currentResult;

    if (operator === '+') {
        currentResult += enteredNumber;
    } else if (operator === '-')  {
        currentResult -= enteredNumber;
    } else if (operator === '*')  {
        currentResult *= enteredNumber;
    } else if (operator === '/')  {
        currentResult /= enteredNumber;
    } 

    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operator, initialResult, enteredNumber, currentResult);

}


function add() {
    calculateResult('+');
}

function subtract() {
    calculateResult('-');
}

function multiply() {
    calculateResult('*');
}

function divide() {
    calculateResult('/');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



const defaultResult = 0;

let currentResult = defaultResult;

// currentResult =  ( currentResult + 10 ) * 3 / 2 - 1; 

//let calculationDescription = "(" + defaultResult + " + 10 ) * 3 / 2 - 1";

// let calculationDescription = `( ${defaultResult} + 10 ) * 3 / 2 - 1`;  //PEMDAS  

function add() {
    const calculationDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
}

// currentResult = add(24, 56);

addBtn.addEventListener('click', add);


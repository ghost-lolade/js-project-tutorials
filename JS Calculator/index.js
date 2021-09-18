"use strict";

const input = document.getElementById('input'),
    number = document.querySelectorAll('.numbers div'),
    operator = document.querySelectorAll('.operators div'),
    result = document.getElementById('result'),
    clear = document.getElementById('clear');
let resultDisplayed = false;

// adding click handlers to number buttons
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {

        // storing current input string and its last character in variables to be used later
        
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        // if result is not displayed we need to keep adding the inputs
        
        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" ||
        lastChar === "×" || lastChar === "÷"){
            
            // if result is currently displayed and user pressed an operator
            // we need to clear the result diplayed start adding to the string all over again
            //  for the next operation
            
            resultDisplayed = false;
            input.innerHTML = e.target.innerHTML;

        } else {
            // If result is currently displayed and user pressed a number
            // we need to clear the input string and add the new input to start the new
            // operation

            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}

// adding click handlers to operator buttons
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(e) {

        // storing current input string and its last character in variables to be used later
        
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        // if the last character entered is an operator, replace it with the 
        // currently pressed one

        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            let newString = currentString.substring(0, currentString.length - 1) + 
            e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.lenght == 0) {
            // if first key pressed is an operator, don't do anything
            console.log("enter a number");
        } else {
            // else just add the operator pressed to the input
            input.innerHTML += e.target.innerHTML;
        }
    });
}

// on click of 'equal to button'
result.addEventListener("click", function() {
    // this is the string that we will be processing eg. -10+26+33-56*34/23
  let inputString = input.innerHTML;
//   getting all the numbers from the input and saving to an array
    let numbers = inputString.split(/\+|\-|\×|\÷/g);

    // colleting all the operators from the input.
    // first we will replace all the numbers and dots with empty strings and then split
    let operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log('--------------------------');

    // now we will loop through the array and do one operation at a time
    // following a bodmas: divide, multiply, then subtraction, then addition
    // 
    let divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }
    let multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }
    let add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }
    let subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }
    input.innerHTML = numbers[0];
    resultDisplayed = true;
    
});

clear.addEventListener("click", function() {
    input.innerHTML = "";
})

// function performOperation (operators, numbers) {
    
//     return numbers[0]
// } 
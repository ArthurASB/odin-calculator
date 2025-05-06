function operate (fstNum, operator, secNum){
    switch (operator) {
        case '+':
            return fstNum + secNum
        
        case '-':
            return fstNum - secNum
        
        case '*':
            return fstNum * secNum
        
        case '/':
            return fstNum / secNum
    }
}

function evaluate (){
    secondOperand = Number(display.textContent);
    let result = operate(firstOperand, currentOperator, secondOperand);
    display.textContent = result;
    firstOperand = result;
    operatorToggled = false;
}

let firstOperand = 0;
let secondOperand = 0;
let currentOperator = 0;
let operatorToggled = false;

const display = document.querySelector(".display");
const kb = document.querySelector(".keyboard");
const numberButtons = document.querySelectorAll(".numerals");
const operatorButtons = document.querySelectorAll(".operators");
const clearButton = kb.querySelector("#clear");
equalButton = kb.querySelector("#equal");


display.textContent = "0";

clearButton.addEventListener("click", () => {
    display.textContent = "0";
    firstOperand = 0;
    secondOperand = 0;
    currentOperator = 0;
    operatorToggled = false;
})

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        if (display.textContent == "0") display.textContent = "";
        if (firstOperand !== 0 && operatorToggled == false) {
            display.textContent = "";
            operatorToggled = true;
        }
        if (display.textContent.length <= 12) {            
            display.textContent += numberButton.textContent;
        }
    })    
});

operatorButtons.forEach(operator => {
    operator.addEventListener("click", () => {
        //first operand has been typed
        if (display.textContent !== "0" && firstOperand == 0) {
            firstOperand = Number(display.textContent);
            currentOperator = operator.textContent;
        //second operand has been typed or user wants to operate 
        //with equal first and second operands    
        } else if (firstOperand && operatorToggled) evaluate();
    })
})

equalButton.addEventListener("click", () => {
    if (currentOperator && operatorToggled){
        if (currentOperator) evaluate();
}}
)
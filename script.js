function calcAdd (fstNum,secNum){
    return fstNum + secNum;
}

function calcSub (fstNum,secNum){
    return fstNum - secNum;
}

function calcMul (fstNum,secNum){
    return fstNum * secNum;
}

function calcDiv (fstNum,secNum){
    return fstNum / secNum;
}

function operate (fstNum, operator, secNum){
    switch (operator) {
        case '+':
            return calcAdd (fstNum, secNum)
        
        case '-':
            return calcSub (fstNum, secNum)
        
        case '*':
            return calcMul (fstNum, secNum)
        
        case '/':
            return calcDiv (fstNum, secNum)
    }
}


let fstOperand = 0;
let sndOperand = 0;
let opertr = 0;
let oprToggle = 0;


display = document.querySelector(".display");
kb = document.querySelector(".keyboard");
numbers = document.querySelectorAll(".numerals");
opps = document.querySelectorAll(".operators");
clearScreen = kb.querySelector("#clear");
equalSign = kb.querySelector("#equal");


display.textContent = "0";

clearScreen.addEventListener("click", () => {
    display.textContent = "0";
    fstOperand = 0;
    sndOperand = 0;
    opertr = 0;
    opertrToggled = 0;
})

numbers.forEach(numbtn => {
    numbtn.addEventListener("click", () => {
        if (display.textContent == "0") display.textContent = "";
        if (fstOperand !== 0 && opertrToggled == 0) {
            display.textContent = "";
            opertrToggled = 1;
        }
        if (display.textContent.length <= 12) {            
            display.textContent += numbtn.textContent;
        }
    })    
});

opps.forEach(operator => {
    operator.addEventListener("click", () => {
        //first operand has been typed
        if (display.textContent !== "0" && fstOperand == 0) {
            fstOperand = Number(display.textContent);
            opertr = operator.textContent;
        //second operand has been typed or user wants to operate 
        //with equal first and second operands    
        } else if (fstOperand !== 0 && opertrToggled === 1){            
            sndOperand = Number(display.textContent);
            let result = operate(fstOperand, opertr, sndOperand);
            display.textContent = "";
            display.textContent = result;
            fstOperand = result;
            opertrToggled = 0;          
        }
    })
})

equalSign.addEventListener("click", () => {
    if (opertr!=0 && opertrToggled == 1){
        if (opertr!=0){
        sndOperand = Number(display.textContent);
        let result = operate(fstOperand, opertr, sndOperand);
        display.textContent = "";
        display.textContent = result;
        fstOperand = result;
        opertrToggled = 0;  
    }
}}
)
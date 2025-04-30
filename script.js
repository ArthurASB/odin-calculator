/*
- CRIAR LIMITE DE DIGITOS NO DISPLAY
- ARMAZENAR O VALOR DIGITADO E FAZER O CALCULO (QUANDO UM OPERADOR OU = for apertado)


*/

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
            calcAdd (fstNum, secNum)
            break;
        
        case '-':
            calcSub (fstNum, secNum)
            break;
        
        case '*':
            calcMul (fstNum, secNum)
            break;
        
        case '/':
            calcDiv (fstNum, secNum)
            break;
    
        default:
            break;
    }
}

display = document.querySelector(".display");
kb = document.querySelector(".keyboard");
buttons = document.querySelectorAll(".numerals");
clearScreen = kb.querySelector("#clear");

display.textContent = "";

clearScreen.addEventListener("click", () => {
    display.textContent = "";
})

//varrendo o NodeList "buttons" para poder acessá-los individualmente
buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    })    
});

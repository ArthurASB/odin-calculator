/*
- CRIAR MANEIRA DE ESCUTAR OS BOTOES E IMPRIMÍ-LOS NO DISPLAY (query o div e criar texto nele?)
- CRIAR LIMITE DE DIGITOS NO DISPLAY
- ARMAZENAR O VALOR DIGITADO E FAZER O CALCULO (QUANDO UM OPERADOR OU = for apertado)
- CRIAR MANEIRA DE LIMPAR O DISPLAY COM O BOTAO CLEAR


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
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
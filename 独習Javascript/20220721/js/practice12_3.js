function sumTax(tax,...vals){

    let returnValue = 0;

    for(const val of vals){
        returnValue += val;
    }

    returnValue = Math.floor(returnValue + (returnValue * tax / 100));

    return returnValue;
}

console.log(sumTax(10,200,300));
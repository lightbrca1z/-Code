function compare(val1,val2){
    if(val1 < val2){
        return -1;
    }
    if(val1 > val2){
        return 1;
    }
    return 0;
}

const arry = [10,2,7,3,9];
arry.sort(compare);
console.log(arry);
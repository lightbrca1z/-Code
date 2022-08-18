function mapper(f){
    return a => map(a,f);
}

const increment = x => x+1;
const incrementAll = mapper(increment);
console.log(incrementAll([1,2,3]));
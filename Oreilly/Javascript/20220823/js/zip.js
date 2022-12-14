function* oneDigitPrimes(){
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

function* zip(...iterables){
    let iterators = iterables.map(i => i[Symbol.iterator]());
    let index = 0;
    while(iterators.length > 0){
        if (index >= iterators.length){
            index = 0;
        }
        let item = iterators[index].next();
        if (item.done){
            iterators.splice(index, 1);
        }
        else {
            yield item.value;
            index++;
        }
    }
}

console.log([...zip(oneDigitPrimes(), "ab", [0])]);
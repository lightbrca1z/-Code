class Range{
    constructor (from, to){
        this.from = from;
        this.to = to;
    }

    has(x) { return typeof x === "number" && this.from <= x && x <= this.to ;}

    toString() { return `{x | ${this.from} <= x <= ${this.to}}`;}

    [Symbol.iterator](){

        let next = Math.ceil(this.from);
        let last = this.to;
        return{
            next(){
                return ( next <= last)
                    ? {value : next++}
                    : {done : true};
            },

            [Symbol.iterator]() { return this;}
        };
    }
}

function map(iterable, f){
    let iterator = iterable[Symbol.iterator]();
    return{
        [Symbol.iterator](){ return this; },
        next(){
            let v = iterator.next();
            if (v.done){
                return v;
            } else {
                return { value: f(v.value)};
            }
        }
    };
}

console.log([...map( new Range(1,4), x => x*x)]);

function filter(iterable, predicate){
    let iterator = iterable[Symbol.iterator]();
    return{
        [Symbol.iterator](){ return this; },
        next(){
            for(;;){
                let v = iterator.next();
                if (v.done || predicate(v.value)){
                    return v;
                }
            }
        }
    };
}

console.log([...filter(new Range(1,10), x => x % 2 === 0)]);
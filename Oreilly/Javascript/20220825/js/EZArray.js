class EZArray extends Array{
    get first() { return this[0]; }
    get last(){ return this[this.length - 1]; }
}

let e = new EZArray(1,2,3);
let f = e.map(x => x * x);
console.log(e.last);
console.log(f.last);
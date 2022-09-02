class EZArray extends Array{
    get first() { return this[0]; }
    get last(){ return this[this.length - 1]; }
}


EZArray[Symbol.species] = Array;

console.log(Object.defineProperty(EZArray, Symbol.species, {value: Array}));
function range(from, to){
    let r = Object.create(range.methods);

    r.from = from;
    r.to = to;

    return r;
}

range.methods = {
    includes(x){return this.from <= x && x <= this.to},
    *[Symbol.iterator](){
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    // rangeオブジェクトの文字列表現を返す。
    toString(){return "(" + this.from + "..." + this.to + ")";}
};

let r = range(1,3);
console.log(r.toString());
console.log(r.includes(2));
console.log([...r]);
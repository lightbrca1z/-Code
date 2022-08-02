//シンボル型の書き方

let mySymbl1 = Symbol();
let mySymbl2 = Symbol();

const obj = {
    [mySymbl1]: "値1",
    [mySymbl2](){console.log("こんにちは");}
}

console.log(obj[mySymbl1]);

obj[mySymbl2]();
var a = "global value";

function f1(){
    var a = "local value";
    return a;
}

function f2(){
    a = "value changed";
}

console.log(a);
console.log(f1());
console.log(a);
f2();
console.log(a);
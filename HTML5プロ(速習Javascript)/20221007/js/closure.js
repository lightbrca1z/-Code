function closure(){

    var a = 1;

    return function() {
        return a++;
    };
}

var c = closure();

console.log(c());
console.log(c());
console.log(c());
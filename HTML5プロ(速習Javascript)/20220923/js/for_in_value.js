var a = "global value";

function f1(){
    var a = "local value";
    for (var i = 0;i < 2;i++){
        var a = "value in for loop";
    }
    return a;
}

console.log(f1());
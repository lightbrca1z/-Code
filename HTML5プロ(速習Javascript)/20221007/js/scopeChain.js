var a = "global";

console.log(a);

f1();

console.log(a);
console.log(z);

function f1() {
    var a = "local-f1";
    var z = "local-f1";

    console.log(a);
    console.log(z);

    f2();

    function f2() {
        var a = "local-f2";

        console.log(a);
        console.log(z);
    }
}
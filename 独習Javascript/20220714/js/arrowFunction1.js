let hello = function(){
    console.log("こんにちは");
}
hello();

hello = () => console.log("こんにちは");
hello();

let double = function(num){
    return num * 2;
}
console.log(double(10));

double = num => num * 2;
console.log(double(10));

setTimeout(function(name){
    console.log("こんにちは, " + name);
},3000,"独習太郎");

setTimeout( name => console.log("こんにちは、" + name),3000,"独習太郎");
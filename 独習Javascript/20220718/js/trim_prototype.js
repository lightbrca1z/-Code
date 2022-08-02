function Test(){}
Test.prototype.hello = function(){console.log("こんにちは")};
const instance = new Test;
console.log(instance.__proto__.hello === instance.hello);

instance.hello();
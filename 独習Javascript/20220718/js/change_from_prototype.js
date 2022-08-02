class Test{
    hello(){console.log("こんにちは")};
}

const instance = new Test;

Test.prototype.hello = function(){console.log("Hello")}

instance.hello();
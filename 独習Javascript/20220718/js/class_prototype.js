class Test{
    hello(){console.log("こんにちは")};
}
    const instance = new Test;

    Test.prototype.hello();

    instance.__proto__.hello();

    instance.hello();
class Person{
    constructor(){
        this.name = "独習太郎";
    }
    hello(){
        console.log("こんにちは");
    }
}

const taro = new Person;

console.log(taro.hasOwnProperty("name"));

console.log("name" in taro);

console.log(taro.hasOwnProperty("hello"));

console.log("hello" in taro);
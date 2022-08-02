class Parent{}
class Child extends Parent{}

const obj = new Child;
console.log(obj instanceof Child);
console.log(obj instanceof Parent);
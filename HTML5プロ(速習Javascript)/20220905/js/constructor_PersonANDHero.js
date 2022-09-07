var Person = function(name){
    this.name = name;
    this.sayHello = function(){
        console.log('Hello, ' + name + '!');
    };
};
var tom = new Person('Tom');
console.log(tom.name);
tom.sayHello();

var Hero = function(name, level, job){
    this.name = name;
    this.sayHello = function(){
        console.log('Hello, ' + name + '!');
    };
    this.level = level;
    this.job = job;
};
var cusinart = new Hero('Cusinart', 5, 'fighter');
console.log(cusinart.name);
cusinart.sayHello();
console.log(cusinart.level);
console.log(cusinart.job);
var Person = function(name){
    this.name = name;
    this.sayHello = function(){
        console.log('Hello, ' + this.name + '!');
    };
};

var Hero = function(name, level, job){
    this.name = name;
    this.level = level;
    this.job = job;
}

Hero.prototype = new Person();

var cusinart = new Hero('cusinart', 5, 'fighter');

Person.prototype.teleport = function(){
    console.log('oops!');
}

cusinart.teleport();
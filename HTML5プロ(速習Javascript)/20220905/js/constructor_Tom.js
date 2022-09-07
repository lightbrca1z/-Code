var Person = function(name){
    var obj = {};
    obj.name = name;
    obj.sayHello = function(){
        console.log('Hello, ' + obj.name + '!');
    };
    return obj;
};

var tom = Person('Tom');
console.log(tom.name);
tom.sayHello();
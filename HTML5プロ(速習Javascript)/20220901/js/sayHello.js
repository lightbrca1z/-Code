var sayHello = function(str){
    var name = str || 'John Doe';
    console.log('Hello,' + name + '!');
};

sayHello('Tom');
sayHello('');
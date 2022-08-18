let uniqueInteger = (function(){
    let counter = 0;
    return function() { return counter++};
}());
console.log(uniqueInteger());
console.log(uniqueInteger());
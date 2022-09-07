var str = 'abc';

var func = function(){
    str = 'edf';
    console.log(str);
}

func();

console.log(str);
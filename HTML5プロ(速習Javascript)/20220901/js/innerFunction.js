var str1 = 'abc';

var func1 = function(){
    var str2 = 'edf';
    var func2 = function(){
        var str3 = 'ghi';
        console.log(str1);
        console.log(str2);
        console.log(str3);
    }
    func2();
    console.log(str1);
    console.log(str2);
    console.log(str3);
};

func1();
console.log(str1);
console.log(str2);
console.log(str3);
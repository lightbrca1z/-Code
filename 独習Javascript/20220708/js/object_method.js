//メソッドの書き方。

let person = {
    hello: function(){ console.log("こんにちは");}
}

person.hello();

person.bye = function(){console.log("さようなら")}
person.bye();

person.hello = function(){console.log("Hello");}
person.hello();
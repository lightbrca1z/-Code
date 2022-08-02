let obj = {
    prop:true,
    subObj:{val:100},
    greeting: function(){
        console.log("こんにちは");
    },
};

console.log(obj["prop"]);
console.log(obj["subObj"]["val"]);
obj["greeting"]();

//ドット記法の場合
obj.subObj.val2 = 1000;

//ブラケット記法の場合
obj["subObj"]["val2"] = 1000;
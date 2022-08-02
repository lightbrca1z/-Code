const fruit1 = {
    apple: function(){
        console.log("リンゴ");
    },
};

//fruit1が__proto__に設定された新しいオブジェクトをfruit2に代入
const fruit2 = Object.create(fruit1);

//fruit2にbananaを追加
fruit2.banana = function(){
    console.log("バナナ");
};

//fruit2が__proto__に設定された新しいオブジェクトをfruit3に代入
const fruit3 = Object.create(fruit2);

//fruit3にmelonを追加
fruit3.melon = function(){
    console.log("メロン");
};

fruit3.apple();

fruit3.banana();

fruit3.melon();
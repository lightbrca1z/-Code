//列挙可能なプロパティは、出力される。設定可能。

const obj = {prop1:"これは列挙可能プロパティです。"};

Reflect.defineProperty(obj, "prop2",{value: "これは列挙可能プロパティではありません。",
enumerable:false});

for(const key in obj){
    console.log(key,obj[key]);
}
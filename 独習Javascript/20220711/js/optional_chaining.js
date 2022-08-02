// let val = undefined.prop;
let val = undefined?.prop;
console.log(val);

const person = {
    name: "独習　太郎",
    age : 28,
    parents: {
        mother : "Sara",
        father : "John",
    },
};

console.log(person.siblings);
console.log(person.siblings?.length);
// console.log(person.siblings.length);

//メソッドに使う場合は、末尾の丸括弧の前に記述する。
// undefined.notMethod?.();

// プラケッド記法と併用することもできる。
undefined?.["prop"];

//使う事はないが、他のプリミティブ型に対しても使用可能
1?.prop;
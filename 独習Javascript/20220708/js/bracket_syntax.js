//オブジェクトのブラケット記法

let person = {
    name: {first: "太郎" , last: "独習"},
    age: 18
};

console.log(person["age"]);

console.log(person["name"]["last"]);

person["name"]["last"] = "太郎";
person["gender"] = "男";
person["family"] = {wife : "花子", child : "三郎"};

console.log(person["family"]["wife"]);
console.log(person);
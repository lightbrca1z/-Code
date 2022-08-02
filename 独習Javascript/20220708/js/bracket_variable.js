//オブジェクトのブラケット記法の変数の指定

const members={
    member1:"太郎",
    member2: "次郎",
};

const keyBase = "member";

console.log(members[keyBase + "1"]);

console.log(members[keyBase + "2"]);
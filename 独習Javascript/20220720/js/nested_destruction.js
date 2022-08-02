const taro = {
    name:{first:"太郎",last:"独習"},
    age:18,
    hobbies:["野球","サッカー"]
};

function greeting({name:{first,last},age,hobbies:[hobby1,hobby2]}){
    console.log(`名前は${last + first}です。${age}歳です。`);
    console.log(`趣味は${hobby1}と${hobby2}です。`);
}

greeting(taro);
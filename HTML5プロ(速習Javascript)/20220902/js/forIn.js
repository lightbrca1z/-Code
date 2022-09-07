var person = {
    name : 'Tom',
    sex : 'man',
    email : 'hoge@fuga.com',
    age: 32
};

for (key in person){
    console.log(key);
    console.log(person[key]);
}
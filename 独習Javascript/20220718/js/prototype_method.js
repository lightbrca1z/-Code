function Person(name){
    this.name = name;
}

Person.prototype.hello = function(){
    console.log(`こんにちは, ${this.name}`);
}

const taro = new Person("独習太郎");
taro.hello();

const hanako = new Person("独習花子");
hanako.hello();
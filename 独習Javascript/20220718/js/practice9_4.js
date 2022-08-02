class Parent{
    constructor(familyName){
        this.familyName = familyName;
    }
    introduction(){
        console.log(`名字は${this.familyName}です。`);
    }
}

class Child extends Parent{
    constructor(familyName){
        super(familyName);
    }
}

const taro = new Child("独習");
taro.introduction();
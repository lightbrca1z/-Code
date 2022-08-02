class Human{

    static TYPE = "普通の人";

    static staticMove(){
        console.log(Human.TYPE + "は歩いて移動します。");
    }

    constructor(name){
        this.name = name;
    }

    move(){
        console.log(this.name + "は歩いて移動します。");
    }
}

const taro = new Human("太郎");
Human.staticMove();

console.log(Human.TYPE);

taro.move();
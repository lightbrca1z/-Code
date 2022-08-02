class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        // this.fullnameの定義は書かない。
    }

    get fullname(){
        return this.lastname + this.firstname;
    }

    set age(value){
        this._age = Number(value);
    }

    get age(){
        return this._age;
    }
}

const taro = new Person("太郎", "独習");

// ゲッターを通じて値を取得
console.log(taro.fullname);

// セッターを通じて文字列で値を設定
taro.age = "18";

// ゲッターを通じて値を種痘
console.log(typeof taro.age);

// オブジェクトの状態を確認
console.log(taro);
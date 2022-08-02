class Parent{
    constructor(value){
        this.parentProp = value;
    }

    parentMethod(){
        console.log("親クラスのメソッド");
    }
}

// 継承先クラス(子クラス)
class Child extends Parent{

    constructor(parentProp, childProp){
        super(parentProp); //親クラスのコンストラクターを実行
        this.childProp = childProp; //子クラス独自のプロパティを追加
    }

    childMethod(){　//子クラス独自のメソッドを追加
        // 親クラスのプロパティを取得
        console.log(`子から親にアクセス[${this.parentProp}]`);
    }
}

// 子クラスからインスタンス化
const childObject = new Child("親","子");

//オブジェクトの確認
console.log(childObject);

childObject.parentMethod();

childObject.childMethod();
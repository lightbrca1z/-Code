class Histogram{
    //初期化処理では、委譲先となるMapオブジェクトを生成する。
    constructor() { this.map = new Map(); }

    //指定されたキーに対して、マップ中の値が回数。
    //マップ中にキーが存在しない場合はゼロ。
    count(key) { return this.map.get(key) || 0;}

    //countがゼロより大きい場合は、Setのhas()のようなメソッドはtrueを返す。
    has(key) { return this.count(key) > 0;}

    //HistogramのSizeは、Map中のエントリ数を返すだけ。
    get size(){ return this.map.size;}

    //キーを追加するときは、Map中の回数をインクリメントするだけ。
    add(key){ this.map.set(key, this,this.count(key) + 1);}

    //キーを削除するときは少し複雑になる。回数がゼロになるようであれば、
    //Mapからキーを削除しなければならないから。
    delete(key){
        let count = this.count(key);
        if(count === 1){
            this.map.delete(key);
        } else if (count > 1){
            this.map.set(key, count - 1);
        }
    }

    [Symbol.iterator]() { return this.map.keys();}

    keys(){return this.map.keys();}
    values(){return this.map.values();}
    entries(){return this.map.entries();}
}
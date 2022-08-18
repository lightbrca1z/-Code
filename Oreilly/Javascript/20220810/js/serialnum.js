const serialnum = {
    //このデータプロパティに、次のシリアル番号が保持される。
    //プロパティ名に_を付けることで、内部でのみ使用sるうプロパティであることを示す。
    _n: 0,

    //現在の値を返して、インクリメントする。
    get next(){ return this._n++;},

    //nの新しい値を設定する。ただし、現在地よりも大きい場合にのみ設定する。
    set next(n){
        if(n > this._n) this._n = n;
        else throw new Error("serial number can only be set to a larger value.");
    }
};
console.log(serialnum.next = 10);
console.log(serialnum.next);
console.log(serialnum.next);
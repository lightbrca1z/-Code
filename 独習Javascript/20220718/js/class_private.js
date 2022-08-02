class Counter{
    #count = 0; //プライベートプロパティ

    #print() { // プライベートメソッド
        console.log(this.#count);
    }

    increment(){ //パブリックメソッド
        this.#count++; 
        this.#print(); //プライベートメソッドを実行
    }
}

const counter = new Counter;
counter.increment();

//アクセス不可
// counter.#count = 10;
// counter.#print();
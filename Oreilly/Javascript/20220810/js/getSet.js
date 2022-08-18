let p = {
    //xとyは通常の読み書き可のデータプロパティ。
    x : 1.0,
    y : 1.0,
    //rはゲッターとセッターを持つ読み書き可のアクセサプロパティ。
    //アクセサメソッドの後にカンマを必ず記述する。
    get r(){return Math.hypot(this.x, this.y);},
    set r(newvalue){
        let oldvalue = Math.hypot(this.x, this.y);
        let ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },

    // thetaはゲッターのみを持つ読み出し専用のアクセサプロパティ。
    get theta(){ return Math.atan2(this.y, this.x);}
};

console.log(p.r); /// Math.SQRT2
console.log(p.theta); // => Math.PI / 4

let q = Object.create(p);
q.x = 3;q.y = 4;
console.log(q.r);
console.log(q.theta);
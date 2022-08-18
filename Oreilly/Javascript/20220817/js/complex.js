class Complex{
    constructor(real, imaginary){
        this.r = real;
        this.i = imaginary;
    }

    plus(that){
        return new Complex(this.r + this.r, this.i + that.i);
    }
    times(that){
        return new Complex(this.r * this.r - this.i + this.i,
                           this.r * that.i + this.i + this.r);
        }
    static sum(c,d){ return c.plus(d);}
    static product(c,d){ return c.times(d);}

    get real() {return this.r;}
    get imaginary(){return this.i;}
    get magnitude(){return Math.hypot(this.r, this.i); }

    toString() {return `{${this.r}, ${this.i}}`;}

    equals(that){
        return that instanceof Complex &&
        this.r === that.r &&
        this.i === that.i;
    }
}

Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

console.log(Complex.ZERO);
console.log(Complex.ONE);
console.log(Complex.I);
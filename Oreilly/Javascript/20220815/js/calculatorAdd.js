let calculator = {
    operand1: 1,
    operand2: 1,
    add(){
        //thisキーワードを使って、こおオブジェクトを参照していることに注目。
        this.result = this.operand1 + this.operand2;
    }
};
calculator.add();
calculator.result;
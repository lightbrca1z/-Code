let o = {
    m:function(){
        let self = this;
        this === o;
        f();

        function f(){
            this === o;
            self === o;
        }
    }
};
o.m();
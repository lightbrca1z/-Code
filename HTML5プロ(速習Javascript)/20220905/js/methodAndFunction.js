var obj = {
    hoge: function(){
        console.log(this);

        var fn = function(){
            console.log(this);
        }
        fn();
    }
}

obj.hoge();
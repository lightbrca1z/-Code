const obj = {
    __proto__:{
        __proto__:{
            hello(){
                console.log("こんにちは");
            }
        },
    },
}
obj.hello();

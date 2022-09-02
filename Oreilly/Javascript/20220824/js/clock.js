function clock(interval, max=Infinity){

    function until(time){
        return new Promise(resolve => setTimeout(resolve, time - Date.now()));
    }

    let startTime = Date.now();
    let count = 0;

    return{
        async next(){
            if(++count > max){
                return {done:true};
            }
            let targetTime = startTime + count * interval;

            await until(targetTime);

            return { value : count };
        },
        [Symbol.asyncIterator]() { return this; }
    };
}

clock(1,3000);
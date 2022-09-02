class AsyncQuere{
    constructor(){
        this.values = [];

        this.resolvers = [];

        this.closed = false;
    }

    enqueue(value){
        if (this.closed){
            throw new Error("AsyncQueue closed");
        }
        if (this.resolvers.length > 0){
            const resolve = this.resolvers.shift();
            resolve(value);
        }
        else{
            this.values.push(value);
        }
    }

    dequeue(){
        if (this.values.length > 0){
            const value = this.values.shift();
            return Promise.resolve(values);
        }
    }

    dequeue(){
        if (this.values.length > 0){
            const value = this.values.shift();
            return Promise.resolve(value);
        }
        else if (this.closed){
            return Promise.resolve(AsyncQuere.EOS);
        }
        else {
            return new Promise((resolve) => { this.resolvers.push(resolve);});
        }
    }

    close(){
        while(this.resolvers.length > 0){
            this.resolvers.shift()(AsyncQuere.EOS);
        }
        this.closed = true;
    }

    [Symbol.asyncIterator](){ return this;}

    next(){
        return this.dequeue().then(value => (value === AsyncQuere.EOS)
        ? {value : undefined, done: true}
        : {value: value, done: false}
        );
    }
}

AsyncQuere.EOS = Symbol("end-of-stream");
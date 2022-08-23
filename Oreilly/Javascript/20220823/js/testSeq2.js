let o = {
    x: 1, y:2, z: 3,
    *g(){
        for(let key of Object.keys(this)){
            yield key;
        }
    }
};
console.log([...o.g()]);
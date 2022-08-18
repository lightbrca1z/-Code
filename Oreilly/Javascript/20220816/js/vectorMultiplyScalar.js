function vectorMultiply({x,y,z=0,...props}, scalar){
    return {x:x*scalar, y:y*scalar, z:z*scalar, ...props};
}
console.log(vectorMultiply({x:1,y:2,w:-1},2));
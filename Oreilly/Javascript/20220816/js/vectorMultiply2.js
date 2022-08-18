//ベクトル{x,y}または{x,y,z}をscalar倍する。
function vectorMultiply({x,y,z=0}, scalar){
    return {x: x*scalar, y:y*scalar,z:z*scalar};
}
console.log(vectorMultiply({x:1,y:2},2));
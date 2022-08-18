function f([x,y,...coords],...rest){
    return [x,y,...rest,...coords];
}
console.log(f([1,2,3,4],5,6));
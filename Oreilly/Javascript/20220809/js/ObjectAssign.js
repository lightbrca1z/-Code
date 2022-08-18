// Object.assign()と同じような処理を行うが、既存のプロパティを上書きしない。
// (また、symbolプロパティも処理しない)
function merge(target, ...sources){
    for(let source of sources){
        for(let key of Object.keys(source)){
            if(!(key in target)){
                target[key] = source[key];
            }
        }
    }
    return target;
}

console.log(Object.assign({x:1},{x:2,y:2},{y:3,z:4}));
console.log(merge({x:1},{x:2,y:2},{y:3,z:4}));
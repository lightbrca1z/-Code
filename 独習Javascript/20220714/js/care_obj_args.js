const obj = {val:1};

function fn(obj2){
    obj2.val = 2;
}

fn(obj);
console.log(obj.val);
function getPropertyNames(o, a = []){
    for(let property in o)a.push(property);
    return a;
}
function findall(a,x){
    let results = [],
        len = a.length,
        pos = 0;
    while(pos < len){
        pos = a.indexOf(x, pos);
        if(pos === -1) break;
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}
a = ["banana","apple","banana","banana","banana"];
console.log(findall(a,"apple"));
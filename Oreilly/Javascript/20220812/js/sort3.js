let a = ["ant","Bug","cat","Dog"];
a.sort();
a.sort(function(s,t){
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});
let a = [33,4,1111,222];
a.sort();
a.sort(function(a,b){
    return a-b;
});
console.log(a.sort((a,b) => b-a));
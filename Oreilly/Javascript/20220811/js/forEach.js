let data = [1,2,3,4,5], sum = 0;
//配列の要素の総計を計算する。
data.forEach(value => {sum += value});
console.log(sum);

//配列の各要素をインクリメントする。
data.forEach(function(v,i,a){a[i] = v + 1});
console.log(data);
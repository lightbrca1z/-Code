let table = new Array(10);
for(let i = 0;i < table.length; i++){
    table[i] = new Array(10);
}

//配列を初期化する。
for(let row = 0; row < table.length; row++){
    for(let col = 0; col < table[row].length; col++){
        table[row][col] = row*col;
    }
}

//2次元配列を使って、5*7を計算する。
console.log(table[3][7]);
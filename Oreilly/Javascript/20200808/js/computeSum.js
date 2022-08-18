let matrix = [[1,2,3,4,5],
              [1,2,3,4,5],
              [1,2,3,4,5]];
let sum = 0, success = false;
computeSum: if (matrix){
    for(let x = 0;x < matrix.length; x++){
        let row = matrix[x];
        if (!row) break computeSum;
        for(let y = 0;y < row.length; y++){
            let cell = row[y];
            if (isNaN(cell)) break computeSum;
            sum+= cell;
            console.log(sum);
        }
    }
    success = true;
    console.log("true");
}

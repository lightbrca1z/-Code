const arry3D =[
    1,[2],3,
    [4,[5]]
];

const arry2D = arry3D.flat();
console.log(arry2D);

const arry1D = arry3D.flat(2);
console.log(arry1D);
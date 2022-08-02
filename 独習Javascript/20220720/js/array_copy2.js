const original = [
    "1階層目の値",
    ["2階層目の値"]
];

const copied = original.concat();
copied[0] = "変更後の値";
copied[1][0] = "変更後の値";
console.log(original[0]);
console.log(original[1][0]);

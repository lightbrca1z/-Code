const fruitsArry = ["banana","orange","grape"];
const fruitsObj = {banana: "バナナ", orange:"オレンジ"};

function bunkatuArry([,,fruit3]){
    console.log(fruit3);
}
bunkatuArry(fruitsArry);

function bunkatuObj({orange}){
    console.log(orange);
}

bunkatuObj(fruitsObj);
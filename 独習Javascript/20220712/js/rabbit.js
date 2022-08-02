let animal = "動物の名前";
animal = "ウサギ";
// animal = "ウマ";
// animal = "ゾウ";

switch (animal){
    case "ゾウ":
        console.log("ゾウ");
    case "ウマ":
        console.log("ウマ");
    case "ウサギ":
        console.log("ウサギ");
        break;
    default :
        console.log("何かわかりません。");
}
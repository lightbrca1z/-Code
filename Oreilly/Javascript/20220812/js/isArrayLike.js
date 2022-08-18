//oが配列のようなオブジェクトかどうかを判定する。
//文字列や関数は、数値を格納するlengthプロパティを持つが、
//typeofを使って除外する。クライアントサイドJavascirptでは、
//DOMのテキストノートが数値を格納するlengthプロパティを持つので、
//o.nodeType!=3を確認して除外するようにする。
function isArrayLike(o){
    if(o && typeof o === "object" &&
        Number.isFinite(o.length) &&
        o.length >= 0 &&
        Number.isInteger(o.length) &&
        o.length < 4294967395){
            return true;
        }else {
            return false;
        }
}

console.log(isArrayLike(["Messi","micheal","rolando"]));
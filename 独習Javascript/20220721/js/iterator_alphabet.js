function alphabeetIterator(start = "a", end = "z"){
    if(start > end){
        throw "開始文字は終了文字より前のアルファベットを選んでください。";
    }

    // アルファベットが１文字ずつ格納された配列を定義
    // * splitはStringオブジェクトのメソッドで引数で指定された文字で文字列を分割し、配列として返却します。
    // * なお、空文字（""）が渡された場合には文字列を一文字ずつ分割します。
    const ALPHABET_ARRAY = "abcdefghijklmnopqrstuvwxyz".split("");
    // ALPHABET_ARRAY = [ 'a', 'b', 'c', ..., 'z' ];

    const startIndex = ALPHABET_ARRAY.indexOf(start);
    const endIndex = ALPHABET_ARRAY.indexOf(end);

    const targetAlphabet = ALPHABET_ARRAY.slice(startIndex,endIndex + 1);

    return {
        next(){
            const alphabet = targetAlphabet.shift();

            return{
                value: alphabet,
                done: alphabet ? false : true,
            }
        }
    }

}

const it = alphabeetIterator("c","e");
let nextValue = it.next();
while(!nextValue.done){
    console.log(nextValue);
    nextValue = it.next();
}

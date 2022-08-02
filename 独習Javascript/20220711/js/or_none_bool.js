//論理積と同様に、Truthyかfalsyに、関係なく、最後に返す値になります。
//trueになった時点で、結果を返し、処理を終了します。

console.log("hello" || "world");
console.log("hello" || undefined);
console.log(null || "world");
console.log(null || undefined);
console.log(null || "" || undefined);
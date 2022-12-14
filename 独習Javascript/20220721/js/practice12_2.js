const html = `<h1>見出し１</h1>    
<h2>見出し２</h2>    
<h3>見出し３</h3>    
<header>ヘッダー</header>`;

function* hTagGen(htmlStr) {
    const matches = html.matchAll(/<(h[1-6])>(.+)<\/\1>/g); // h1~h6のマッチを確認
    for (const matched of matches) {
        yield matched[2]; // matchedの2番目にはテキストが含まれています。
    }
}

// 確認
for (const text of hTagGen(html)) {
    console.log(text);
}
// > 見出し１
// > 見出し２
// > 見出し３

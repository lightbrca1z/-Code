function html(strings, ...values){
    let escaped = values.map(v => String(v)
                        .replace("&", "&amp;")
                        .replace("<", "&lt;")
                        .replace(">", "&gt")
                        .replace('"', "&quot")
                        .replace("'", "&#39;"));

    let result = strings[0];
    for(let i = 0;i < escaped.length; i++){
        result += escaped[i] + strings[i+1];
    }
    return result;
}

let operator = "<";
html `<b>x ${operator} y</b>`

let kind = "game"
let name = "D&D";
html `<div class="${kind}">${name}</div>
class="game">D&amp:D</div>`;
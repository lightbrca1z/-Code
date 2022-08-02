    // オブジェクトの分割代入はプロパティ名の変数を宣言する。プロパティの順番は関係ない
    let { banana, orange, apple } = { apple: "リンゴ", banana: "バナナ", orange: "オレンジ" };
    console.log(banana);

    // > バナナ
    // プロパティと変数名を変えたい場合
    let { banana: b, apple: a } = { apple: "リンゴ", banana: "バナナ" };
    console.log(b, a);
    // > バナナ リンゴ

    // デフォルト値を代入する場合
    let { banana: b2 = "おいしいバナナ" } = { apple: "リンゴ" };
    console.log(b2);
    // > おいしいバナナ

    // スプレッド演算子と合わせて使うこともできる
    let { banana: b3, ...fruits } = { apple: "リンゴ", banana: "バナナ", orange: "オレンジ" };
    console.log(fruits);
    // > {apple: "リンゴ", orange: "オレンジ"} バナナ以外が格納されたオブジェクトが生成

    // ネストしたオブジェクトも展開できる
    let { fruits: { apple: a3 } } = { fruits: { apple: "リンゴ", banana: "バナナ" } };
    console.log(a3);
    // > リンゴ

    // 動的にプロパティ名を指定できる
    let prop = "apple";
    let { [prop]: a4 } = { apple: "リンゴ", banana: "バナナ", orange: "オレンジ" };
    console.log(a4);
    // > リンゴ
// { タイトル, 優先順位, 完了か否か }
// 優先順位(priority)は1:低、2:中、3:高
const todos = [
    {title:"晩御飯",priority:2,completed:false},
    {title:"ゴミ出し",priority:1,completed:true},
    {title:"食材の買い出し",priority:3,completed:false},
    {title:"選択",priority:2,completed:true},
    {title:"録画の視聴",priority:1,completed:false},
];

// 1 解答  Todoリストの出力
// 完了しているタスク:「{タイトル}は完了!」
// 完了していないタスク:「{タイトル}をやらないと!」
todos.forEach(({title,completed}) => {
    if(completed){
        console.log(`${title}は完了！`);
    }
    else{
        console.log(`${title}をやらないと！`);
    }
});

// 2 解答 完了していないタスクの抽出
const notCompleted = todos.filter(({completed}) => 
{ return completed !== true;
});

// 3 解答 優先順位で並べ替え
notCompleted.sort((todoA,todoB) => {
    return todoB.priority - todoA.priority;
});


// 3 別解 3は分割代入で記述すると次のように記述できる
notCompleted.sort(({priority: priorityA},{priority:priorityB}) =>
{
    return priorityB - priorityA;
});

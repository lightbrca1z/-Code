const capitals = {
    日本:"東京",
    アメリカ:"ワシントン",
    イギリス:"ロンドン"
};

for(const [country,capital] of Object.entries(capitals)){
    console.log(`${country}の首都は${capital}です。`);
}
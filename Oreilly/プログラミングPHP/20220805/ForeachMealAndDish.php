<?php

$meals = array('Walnut Bun' => 1,
                'Cashew Nuts and White Mushrooms' => 4.95,
                'Dried Mulberries' => 3.00,
                'Eggplant with chili Sauce' => 6.50);

foreach ($meals as $dish => $price){
    // $price = $price * 2 ではうまくいかない
    $meals[$dish] = $meals[$dish] + 2;
}

//配列をもう一度反復処理して変更した値を出力する。
foreach($meals as $dish => $price){
    printf("The new price of %s is \$%.2f.<br/>",$dish,$price);
}

?>
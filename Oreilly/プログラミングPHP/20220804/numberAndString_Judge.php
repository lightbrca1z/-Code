<?php
if("x54321" > "x5678"){
    print 'the string "x54321" is greater than the string "x5678".'."<br/>";
} else{
    print 'The string "x54321" is not greater than the string "x5678"'."<br/>";
}

//以下の値は数値の順で比較される。
if("54321" > "5678"){
    print 'The string "54321" is greater than the string "5678".'."<br/>";
}else{
    print 'The string "54321" is not greater than the stirng "5678".'."<br/>";
}

//以下の値は辞書の順で比較される。
if('6 pack' < '55 card stud'){
    print 'The string "6 pack" is less than the string "55 card stud".'."<br/>";
}else{
    print 'The string "6 pack" is not less than the string "55 card stud".'."<br/>";
}

//以下の値は数値の順に比較される。
if('6 pack' < 55){
    print 'the string "6 pack" is less than the number 55.'."<br/>";
}else{
    print 'the string "6 pack" is not less than the number 55.'."<br/>";
}

?>
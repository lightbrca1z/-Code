<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form name="dentaku">
        <table>
            <input type="text" class="display" name="display" value="" disabled>
        <tr>
        <td><input type="button" id="b1" value="1" onclick="get_calc(this)"></td>
        <td><input type="button" id="b2" value="2" onclick="get_calc(this)"></td>
        <td><input type="button" id="b3" value="3" onclick="get_calc(this)"></td>
        </tr>
        <tr>
        <td><input type="button" id="b4" value="4" onclick="get_calc(this)"></td>
        <td><input type="button" id="b5" value="5" onclick="get_calc(this)"></td>
        <td><input type="button" id="b6" value="6" onclick="get_calc(this)"></td>
        </tr>
        <tr>
        <td><input type="button" id="b7" value="7" onclick="get_calc(this)"></td>
        <td><input type="button" id="b8" value="8" onclick="get_calc(this)"></td>
        <td><input type="button" id="b9" value="9" onclick="get_calc(this)"></td>
        </tr>
        <tr>
        <td><input type="button" id="b0" value="0" onclick="get_calc(this)"></td>
        <td><input type="button" id="bC" value="C" onclick="get_calc(this)"></td>
        <td><input type="button" id="bE" value="=" onclick="get_calc(this)"></td>
        </tr>
        <tr>
            <td><input type="button" id="+" value="+" onclick="get_calc(this)"></td>
            <td><input type="button" id="-" value="-" onclick="get_calc(this)"></td>
            <td><input type="button" id="*" value="×" name="multi_btn" onclick="get_calc(this)"></td>
            <td><input type="button" id="/" value="/" name="div_btn" onclick="get_calc(this)"></td>
        </tr>

<script>
 function get_calc(btn){
    if(btn.value == "="){
        document.dentaku.display.value = eval(document.dentaku.display.value);
    }else if(btn.value == "C"){
        document.dentaku.display.value = "";
    }else{
        if(btn.value == "×"){
            btn.value = "*";
        }else if(btn.value == "/"){
            btn.value = "/";
    }
    document.dentaku.display.value += btn.value;
    document.dentaku.multi_btn.value="×";
    document.dentaku.div_btn.value="/";
    }
}
</script>
</body>
</html>
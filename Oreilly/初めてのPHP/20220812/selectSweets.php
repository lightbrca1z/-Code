<?php

$sweets = array('Sesame Seed Puff','Coconut Milk Gelatin Square',
                'Brown Sugar Cake','Sweet Rice and Meat');

function generate_options($options){
    $html = '';
    foreach ($options as $option){
        $html .= "<option>$option</option><br/>";
    }
    return $html;
}

function show_form(){
    $sweets = generate_options($GLOBALS['sweets']);
    print <<< _HTML_
<form method="post" action="$_SERVER[PHP_SELF]">
Your Order: <select name="order">
$sweets
</select>
<br/>
<input type="submit" value="order">
</form>
_HTML_;
}

show_form();

?>
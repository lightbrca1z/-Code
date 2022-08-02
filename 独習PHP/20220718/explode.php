<?php
$data = 'リオとニンザブロウとナミとリンリン';
print_r(explode('と',$data))."<br/>";
print_r(explode('や',$data))."<br/>";
print_r(explode('と',$data,2))."<br/>";
print_r(explode('と',$data,-2));

?>
<?php
$dir = scandir(__DIR__);
foreach ($dir as $item){
        
    if(is_file(__DIR__."/".$item) && __DIR__."/".$item != __FILE__){
        
        echo "<a href='$item'>".$item."</a><br/>";
    }
}

?>
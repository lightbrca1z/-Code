<?php

trait First
{
    public function doFirst()
    {
        echo "first <br/>";
    }
}

trait Second
{
    public function doSecond(){
        echo "second <br/>";
    }
}

trait Third
{
    use First,Second;

    public function doAll()
    {
        $this->doFirst();
        $this->doSecond();
    }
}

class Combined
{
    use Third;
}

$object = new Combined;
$object->doAll();

?>
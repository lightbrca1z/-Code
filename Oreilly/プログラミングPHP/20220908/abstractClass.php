<?php
//traitはクラスの枠を超えてコードを再利用する仕組み。
trait Sortable
{
abstract function uniqueId();

function compareById($object)
{
    return ($object->uniqueId() < $this->uniqueId()) ? -1 : 1;
}
}

class Bird
{
    use Sortable;

    function uniqueId(){
        return __CLASS__.":{$this->id}";
    }
}

// class Car{
//     use Sortable;
// }

$bird = new Bird;
// $cat = new Car;
$card = "A";
$comparison = $bird->compareById($card);

//結果：動かない。

?>
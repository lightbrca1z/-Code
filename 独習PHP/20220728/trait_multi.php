<?php

interface IFax{
    function send();
}

interface IPrinter{
    function print();
}

trait FaxTrait{
    public function send() : void{
        print 'sending Fax... sended!'."<br/>";
    }
}

trait PrinterTrait{
    public function print() : void{
        print 'printing ... completed!';
    }
}

//複合機クラスの定義
class FaxPrinter implements IFax,IPrinter{
    use FaxTrait, PrinterTrait;
}

$fp = new FaxPrinter();
$fp->send();
$fp->print();

?>
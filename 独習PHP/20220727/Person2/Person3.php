<?PHP

class Person{
    public string $firstName;
    public String $lastName;

    public function show() : void{
        print "<p>ボクの名前は{$this->lastName}{$this->firstName}です。</p>";
    }
}

?>
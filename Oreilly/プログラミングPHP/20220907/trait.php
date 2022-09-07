<?php
trait Logger
{
    public function log($logString){
        $className = __CLASS__;
        echo date("Y-m-d h:i:s",time()).": [{$className}]{$logString}\n";
    }
}

class User
{
    use Logger;

    public $name;

    function __construct($name = '')
    {
        $this->name = $name;
        $this->log("Created user '{$this->name}'<br/>");
    }

    function __toString()
    {
        return $this->name;
    }
}

class UserGroup
{
    use Logger;

    public $users = array();
    
    public function includesUser($user)
    {
        return in_array($user, $this->users);
    }

    public function addUser(User $user)
    {
        if(!$this->includesUser($user)){
            $this->users[] = $user;
            $this->log("Added user '{$user}' to group<br/>");
        }
    }
}

$group = new UserGroup;
$group->addUser(new User("Franklin"));

?>
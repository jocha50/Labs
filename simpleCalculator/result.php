
<?php


    function add(){

        $num1a = $_POST['num1Add'];
        $num2a = $_POST['num2Add'];
        $resutl= $num1a + $num2a;
        
        if(!empty($num1a) && !empty($num2a)){
            echo("$num1a + $num2a = $resutl \n");}
        
    
    }
   
  
    function multiply(){
        $num1m = $_POST['num1Multiply'];
        $num2m = $_POST['num2Multiply'];
        $result2= $num1m * $num2m;
        if(!empty($num1m) && !empty($num2m)){
        echo("$num1m * $num2m = $result2");}
    }
   

   
    add();
    echo("<br>");
    multiply();
    

    

?>




    function calcula_ace(){
    var masa= 5.97E24;
    var gravedad=9.8;
    var radio= 405777100;
    var ace= (masa*gravedad)/radio;

    var d=document.getElementById("resultadoA");
    d.innerHTML=' arad= '+ace;
    }

function CalcularImc()
{
    let img = document.getElementById("img");
    var peso = parseFloat(document.getElementById("peso"). value);
    var altura = parseFloat(document.getElementById("altura"). value);
    var calculo = parseFloat(peso / altura **2).toFixed(2)
    document.getElementById("peso"). value = "";
    document.getElementById("altura"). value = "";

    if (document.getElementById("idoso").checked){
        document.getElementById("res").innerHTML = "Seu IMC é igual a: " + calculo;
        if (calculo < 21.9){
            img.src ="Imagens/AbaixoPeso.jpg";
        } 
    
        if ((calculo >= 22) && (calculo < 27)){
            img.src ="Imagens/PesoNormal.jpg";
        } 
    
        if ((calculo >= 27.1) && (calculo <= 32)){
            img.src ="Imagens/AcimaPeso.jpg";
        } 
    
        if ((calculo >= 32.1) && (calculo <= 37)){
            img.src ="Imagens/Obesidade1.jpg";
        } 
    
        if ((calculo >= 37.1) && (calculo <= 41.9)){
            img.src ="Imagens/Obesidade2.jpg";
        } 
    
        if (calculo > 42){
            img.src ="Imagens/Obesidade3.jpg";
        } 
    }
    

    if (document.getElementById("jovem").checked){
        document.getElementById("res").innerHTML = "Seu IMC é igual a: " + calculo;
        if (calculo < 17){
            img.src ="Imagens/MuitoAbaixo.jpg";
        } 

        if ((calculo >= 17) && (calculo <= 18.49)){
            img.src ="Imagens/AbaixoPeso.jpg";
        } 

        if ((calculo >= 18.5) && (calculo <= 24.99)){
            img.src ="Imagens/PesoNormal.jpg";
        } 

        if ((calculo >= 25) && (calculo <= 29.99)){
            img.src ="Imagens/AcimaPeso";
        } 

        if ((calculo >= 30) && (calculo <= 34.99)){
            img.src ="Imagens/Obesidade1";
        } 

        if ((calculo >= 35) && (calculo <= 39.99)){
            img.src ="Imagens/Obesidade2.jpg";
        } 

        if (calculo > 40){
            img.src ="Imagens/Obesidade3.jpg";
        } 

    }

}

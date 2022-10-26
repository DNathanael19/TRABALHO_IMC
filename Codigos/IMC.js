function Soma()
{
    let img = document.getElementById("img");
    var peso = parseFloat(document.getElementById("peso"). value);
    var altura = parseFloat(document.getElementById("altura"). value);
    var calculo = parseFloat(peso / altura **2).toFixed(2)
    document.getElementById("res").innerHTML = "Seu IMC é igual a: " + calculo;
    document.getElementById("peso"). value = "";
    document.getElementById("altura"). value = "";

    if (calculo < 17){
        img.src ="Imagens/Abaixo17.jpg";
    } 

    if ((calculo >= 17) && (calculo <= 18.49)){
        img.src ="Imagens/Entre17e18,49.jpg";
    } 

    if ((calculo >= 18.5) && (calculo <= 24.99)){
        img.src ="Imagens/Entre18,5e24,99.jpg";
    } 

    if ((calculo >= 25) && (calculo <= 29.99)){
        img.src ="Imagens/Entre25e29,99.jpg";
    } 

    if ((calculo >= 30) && (calculo <= 34.99)){
        img.src ="Imagens/Entre30e34,99.jpg";
    } 

    if ((calculo >= 35) && (calculo <= 39.99)){
        img.src ="Imagens/Entre35e39,99.jpg";
    } 

    if (calculo > 40){
        img.src ="Imagens/Acimade40.jpg";
    } 

}

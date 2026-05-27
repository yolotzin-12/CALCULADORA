console.log("HOLA 3-D");

function suma(){
    //SUMA
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let res = (+numero1) + (+numero2);

    document.getElementById("resultado").innerText = "El resultado es: " + res;


}

function resta(){
    //RESTA
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let res = (numero1) - (numero2);

    document.getElementById("resultado").innerText = "El resultado es: " + res;
}

function multiplicacion(){
    //MULTIPLICACION
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let res = (numero1) * (numero2);

    document.getElementById("resultado").innerText = "El resultado es: " + res;
}

function division(){
    //DIVISION
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let res = (numero1) / (numero2);

    document.getElementById("resultado").innerText = "El resultado es: " + res;
}



document.getElementById("btn_suma").addEventListener("click",suma);
document.getElementById("btn_resta").addEventListener("click",resta);
document.getElementById("btn_multiplicacion").addEventListener("click",multiplicacion);
document.getElementById("btn_division").addEventListener("click",division);

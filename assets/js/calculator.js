function sumar(){
    var primerValor = document.getElementById('valorIngresar').value;
    var segundoValor = document.getElementById('valorIngresarDos').value;
    document.getElementById('total').innerHTML = primerValor + segundoValor;
}

function restar(){
    var primerValor = document.getElementById('valorIngresar').value;
    var segundoValor = document.getElementById('valorIngresarDos').value;
    document.getElementById('total').innerHTML = primerValor - segundoValor;
}

function multiplicar(){
    var primerValor = document.getElementById('valorIngresar').value;
    var segundoValor = document.getElementById('valorIngresarDos').value;
    document.getElementById('total').innerHTML = primerValor * segundoValor;
}

function dividir(){
    var primerValor = document.getElementById('valorIngresar').value;
    var segundoValor = document.getElementById('valorIngresarDos').value;
    document.getElementById('total').innerHTML = primerValor / segundoValor;
}

const borrarDatos = () => {
    document.getElementById("valorIngresar").value = "";
    document.getElementById("valorIngresarDos").value = "";
    document.getElementById("total").textContent = "TOTAL";
  }
  
    

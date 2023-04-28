
function sumar(){
    var primerValor = parseInt(document.getElementById('valorIngresar').value);
    var segundoValor = parseInt(document.getElementById('valorIngresarDos').value);
    document.getElementById('total').innerHTML = primerValor + segundoValor;
}

function restar(){
    var primerValor = parseInt(document.getElementById('valorIngresar').value);
    var segundoValor = parseInt(document.getElementById('valorIngresarDos').value);
    document.getElementById('total').innerHTML = primerValor - segundoValor;
}

function multiplicar(){
    var primerValor = parseInt(document.getElementById('valorIngresar').value);
    var segundoValor = parseInt(document.getElementById('valorIngresarDos').value);
    document.getElementById('total').innerHTML = primerValor * segundoValor;
}

function dividir(){
    var primerValor = parseInt(document.getElementById('valorIngresar').value);
    var segundoValor = parseInt(document.getElementById('valorIngresarDos').value);
    document.getElementById('total').innerHTML = primerValor / segundoValor;
}

const borrarDatos = () => {
    document.getElementById("valorIngresar").value = "";
    document.getElementById("valorIngresarDos").value = "";
    document.getElementById("total").textContent = "TOTAL";
  }
  
    

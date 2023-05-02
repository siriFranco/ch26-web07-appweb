function jugar(){    
    var applyRandom = Math.floor(Math.random() * 100) +1;
    var preguntar;
    var mostrarNumero;
    var limpiarFelicitar;
    var mensajePreguntar = ("¿Es éste tu número?");
    preguntar = (document.getElementById("preguntarSiNumero").innerHTML = mensajePreguntar);
    mostrarNumero = (document.getElementById("verNumero").innerHTML = applyRandom);
    limpiarFelicitar = (document.getElementById("felicitar").innerHTML = ('')); 
}

function menorNumero(){
    const minNumero = 1;
    var mensaje0;
    var obtenerVerNumero = document.getElementById("verNumero").innerHTML;
    var obtenerNumMaximo = document.getElementById("numMaximo").innerHTML;
    const parseNumMaximo = parseInt(obtenerNumMaximo);
    if (obtenerVerNumero < parseNumMaximo) {
        (document.getElementById("numMaximo").innerHTML = obtenerVerNumero);
    }
    applyRandom0;
    var applyRandom0 = Math.floor(Math.random() * obtenerVerNumero - minNumero + 2);
    mensaje0 = (document.getElementById("verNumero").innerHTML = applyRandom0);

}

function mayorNumero(){
    var mensaje0;
    const obtenerVerNumero = document.getElementById("verNumero").innerHTML;
    const obtenerNumMinimo = document.getElementById("numMinimo").innerHTML;
    const parseNumMinimo = parseInt(obtenerVerNumero);
    const maxNumero = 100;
    console.log(obtenerVerNumero);
    console.log(parseNumMinimo);
    console.log(obtenerNumMinimo);
    if (obtenerVerNumero > obtenerNumMinimo) {
        (document.getElementById("numMinimo").innerHTML = obtenerVerNumero);
    }
    console.log(obtenerVerNumero);
    applyRandom;
    var applyRandom = Math.floor(Math.random() * (maxNumero - parseNumMinimo +1) + parseNumMinimo);
    console.log(applyRandom);
    mensaje0 = (document.getElementById("verNumero").innerHTML = applyRandom);
    console.log(mensaje0);

    /* mensaje0 = (document.getElementById("verNumero").innerHTML = applyRandom);
    var minima;
    minima = (document.getElementById("verNumero").innerHTML = applyRandom);
    mensaje0 = (document.getElementById("numMinimo").innerHTML = minima); */
}

function correctoNumero(){
    var mensajeCorrecto;
    mensajeCorrecto = document.getElementById("felicitar").innerHTML = `Tu número es el ${document.getElementById("verNumero").innerHTML}, excelente decisión`;
}

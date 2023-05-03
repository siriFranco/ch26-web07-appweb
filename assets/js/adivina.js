function jugar(){    
    var applyRandom = Math.floor(Math.random() * 100) +1;
    var preguntar;
    var mostrarNumero;
    var limpiarFelicitar;
    var mensajePreguntar = ("¿Es éste tu número?");
    preguntar = (document.getElementById("preguntarSiNumero").innerHTML = mensajePreguntar);
    mostrarNumero = (document.getElementById("verNumero").innerHTML = applyRandom);
    limpiarFelicitar = (document.getElementById("felicitar").innerHTML = (''));
    var reinicioNumMinimo;
    var reinicioNumMaximo; 
    reinicioNumMinimo = (document.getElementById("numMinimo").innerHTML = 1);
    reinicioNumMaximo = (document.getElementById("numMaximo").innerHTML = 100);
}

function menorNumero(){
    const minNumero = 1; //mínima
    var mensaje0; // variable para uso más adelante
    var obtenerVerNumero = document.getElementById("verNumero").innerHTML; //Obtener número generado de manera aleatoria por función "jugar"
    var obtenerNumMaximo = document.getElementById("numMaximo").innerHTML; //obtener el número máximo indicado
    const parseNumMaximo = parseInt(obtenerNumMaximo); //parse a número máximo
    if (obtenerVerNumero < parseNumMaximo) {
        (document.getElementById("numMaximo").innerHTML = obtenerVerNumero);
    } // se aplica if para que el número máximo se actualice por el nuevo
    applyRandom0;
    var applyRandom0 = Math.floor(Math.random() * obtenerVerNumero - minNumero + 2); // aplicado aleatorio para obtener nuevo número 
    mensaje0 = (document.getElementById("verNumero").innerHTML = applyRandom0); //número aleatorio colocado en posición original de función "jugar"
}


function mayorNumero(){
    var mensaje0;
    const obtenerVerNumero = document.getElementById("verNumero").innerHTML; //Obtener numero random original indicado por función "jugar"
    const obtenerNumMinimo = document.getElementById("numMinimo").innerHTML; // Obtener número mínimo indicado en párrafo
    const parseNumMinimo = parseInt(obtenerVerNumero); // Parse a número mínimo
    var obtenerNumMaximo = document.getElementById("numMaximo").innerHTML; //Obtener número máximo indicado en párrafo 
    const parseNumMaximo = parseInt(obtenerNumMaximo); //Parse a número máximo
    const maxNumero = parseNumMaximo; // colocar como constante el valor máximo obtenido
    console.log(obtenerVerNumero); 
    console.log(obtenerNumMinimo);
    console.log(parseNumMinimo);
    console.log(obtenerNumMaximo);
    console.log(parseNumMaximo);
    console.log(maxNumero);
    if (obtenerVerNumero > obtenerNumMinimo) {
        (document.getElementById("numMinimo").innerHTML = obtenerVerNumero);
    } /* else {
        alert("Cuidado, algo raro pasa aquí");
    } */ // aplicar un if para cambiar el valor mínimo, afirmando que el número pensado es mayor al actual mínimo
    console.log(obtenerVerNumero);
    applyRandom; //variable random para renovar el número random original
    var applyRandom = Math.floor(Math.random() * (maxNumero - parseNumMinimo +1) + parseNumMinimo); //se usa la variable actual de número máximo y el mínimo actual para crear un nuevo número random entre esos valores
    console.log(applyRandom);
    mensaje0 = (document.getElementById("verNumero").innerHTML = applyRandom); //cambiar el número principal (el de botón jugar) por el nuevo número random
    console.log(mensaje0);
}

function correctoNumero(){
    var mensajeCorrecto;
    mensajeCorrecto = document.getElementById("felicitar").innerHTML = `Tu número es el ${document.getElementById("verNumero").innerHTML}, excelente decisión`;
}


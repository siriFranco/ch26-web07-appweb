console.log("Hola desde un script externo");

/* Mejor opción porque esta función se usa en los 3 botones*/
function changeColorTo(color){
    const refName = document.getElementById("name");

    refName.style.color = color;
}

/* Para cambiar color del texto "Me cambiaré a..." */
function changeColorParagraph(color, refObj){
    console.log(refObj);
    refObj.style.color = color;
}

/* Reset */
function resetColors(){
    const refObjs = document.getElementsByClassName("text-color");
    console.log(refObjs);
    for (let index = 0; index < refObjs.length; index++) {
        const element = refObjs[index];
        element.style.color = "black";       
    }
}

/* Función factible pero más larga porque es una función por cada botón*/
function changeColorToBlue() {
    const refName = document.getElementById("name");
    refName.style.color = "blue";
}

function changeColorToGray() {
    const refName = document.getElementById("name");
    refName.style.color = "gray";
}

function changeColorToRed() {
    const refName = document.getElementById("name");
    refName.style.color = "red";
}
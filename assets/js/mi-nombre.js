

function changeGreeting(){
    // obtener nombre cliente
    const visitorName = getNameOfVisitor ();
    // obtener referencia label h1
    const greetingReference = getReferenceOfIdGreeting();
    greetingReference.innerHTML = "¡Hola " + visitorName +"!";
    // cambiar saludo
}

function getNameOfVisitor(){
    const visitorName = prompt("Escribe tu nombre");
    return visitorName;
}

function getReferenceOfIdGreeting(){
    return document.getElementById("Greeting");
}

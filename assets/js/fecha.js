function calcular(){
  // obtener datos 
  obtenerDia = document.getElementById("dia").value;
  obtenerMes = document.getElementById("mes").value; 
  obtenerAnio = document.getElementById("anio").value;

  // fusionar
  unirDatos = (`${obtenerMes} ${obtenerDia}, ${obtenerAnio}`); 
  console.log(unirDatos); //Funciona

  //obtener el número correspondiente al día (ej. 1 a Lun) según la fecha
  // diaNumero porque arrojará un número correspondiente al día
  // otra forma más larga es quitar el weekday[] junto su const, y hacerlo en un paso posterior, necesitaría un nuevo let
  const weekday = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  const d = new Date(unirDatos);  
  let diaNumero = weekday[d.getDay()]; /* 
  document.getElementById("resultado").innerHTML = dia; */
  console.log(document.getElementById("resultado").innerHTML = diaNumero); //Funciona

  //Seccionar días para decir si se laboró ó no
  switch (diaNumero) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
      console.log('ese día es laboral');
      document.getElementById("resultado").innerHTML = `Ese día es ${diaNumero}, es laboral`; 
      break;
    case 'Sábado':
      document.getElementById("resultado").innerHTML = `Ese día es ${diaNumero}, fin de semana, desafortunadamente ese día hay quienes laboran`; 
      break;
    case 'Domingo':
      document.getElementById("resultado").innerHTML = `Ese día es ${diaNumero}, no es laborable, es fin de semana`; 
      break;
    default:
      document.getElementById("resultado").innerHTML = `No es una fecha válida, intenta de nuevo por favor`; alert(`¡Ups! Algo salió mal ¿estás tratando de romper la matrix?`) ;
  }

} 

const form = document.getElementById("clase_form"),
      claseNombre = document.getElementById("clase_name"),
      claseMateria = document.getElementById("clase_materia"),
      claseHrIni = document.getElementById("clase_hrinicial"),
      clase_hrFin = document.getElementById("clase_hrfinal"),
      claseGrado = document.getElementById("clase_grado");

form.addEventListener("submit", (e) => {
    
    let clase = {
        nombre: claseNombre.value,
        materia: claseMateria.value,
        horaIni: claseHrIni.value,
        horaFin: clase_hrFin.value
    }

    appendObjectToLocalStorage(clase);
})

function appendObjectToLocalStorage(object){
    let clases = [],
    dataInLocalStorage = localStorage.getItem('clases');
  
    if (dataInLocalStorage !== null) 
    {
    clases = JSON.parse(dataInLocalStorage);
    }
    clases.push(object);
    localStorage.setItem('users', JSON.stringify(clases));
  }
  
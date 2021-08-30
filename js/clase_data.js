const form = document.getElementById("clase_form"),
      claseNombre = document.getElementById("clase_name"),
      claseMateria = document.getElementById("clase_materia"),
      claseHrIni = document.getElementById("clase_hrinicial"),
      clase_hrFin = document.getElementById("clase_hrfinal"),
      claseGrado = document.getElementById("clase_grado"),
      claseLink = document.getElementById("materiaLink");

form.addEventListener("submit", (e) => {
    
    let clase = {
        nombre: claseNombre.value,
        materia: claseMateria.value,
        horaIni: claseHrIni.value,
        horaFin: clase_hrFin.value,
        claseGrado: claseGrado.value,
        claseLink: claseLink.value
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
    localStorage.setItem('clases', JSON.stringify(clases));
  }
  
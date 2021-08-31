const form = document.getElementById("clase_form"),
      claseNombre = document.getElementById("clase_name"),
      claseMateria = document.getElementById("clase_materia"),
      claseHrIni = document.getElementById("clase_hrinicial"),
      clase_hrFin = document.getElementById("clase_hrfinal"),
      claseGrado = document.getElementById("clase_grado"),
      claseLinkSwitch = document.getElementById("materiaLink"),
      claseLinksArea = document.getElementById("checkbox-div"),
      claseLinks = document.getElementById("clase-links");

claseLinkSwitch.addEventListener("click", (e) => {
    
    if ($("#materiaLink").is(":checked")) {

        claseLinksArea.insertAdjacentHTML("beforeend", `
            
                <div>
                <label for = "clase-links"></label>
                <textarea id = "clase-links" name = "clase-links" class = "form-control" placeholder = "Pega aquí los links de plataformas educativas con las que trabajes para impartir tu clase"></textarea>
                </div>

            `)

    } else {
        e.preventDefault;
    }
        
})

form.addEventListener("submit", (e) => {
    
    let clase = {
        nombre: claseNombre.value,
        materia: claseMateria.value,
        horaIni: claseHrIni.value,
        horaFin: clase_hrFin.value,
        claseGrado: claseGrado.value,
        /*claseLink: claseLinks.value*/
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
  
const clasesDiv = document.getElementById("mis_clases");

window.onload = function(e) {
    
    let clase = JSON.parse(localStorage.getItem("clases"));

    for ( let i = 0; i < clase.length; i++) {

        clasesDiv.insertAdjacentHTML("beforeend", `
        
        <div class = "border rounded mb-3">

                        <h5 class = "ms-3 mt-3"><i class="fas fa-calculator" style = "width: 28px;"></i>${clase[i].nombre}</h5>
                        <ul>
                            <li style = "list-style: none; padding: 10px;">
                                Materia: <strong>${clase[i].materia}</strong>
                            </li>
                            <li style = "list-style: none; padding: 10px;">
                               Hora Inicial: <strong>${clase[i].horaIni}</strong>
                            </li>
                            <li style = "list-style: none; padding: 10px;">
                               Hora Final: <strong>${clase[i].horaFin}</strong>
                            </li>
                            <li style = "list-style: none; padding: 10px;">
                               Grado: <strong>${clase[i].claseGrado}</strong>
                            </li>
                           
                        </ul>

                    </div>

        `)

    }

        

}
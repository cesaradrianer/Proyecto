const btnEnviar = document.getElementById('btn-enviar');

function saveInStorage(){ 

    let usuario= document.getElementById("usuario");
    localStorage.setItem("usuario", usuario.value);

    let password= document.getElementById("password");
    localStorage.setItem("password", password.value);   
   
}
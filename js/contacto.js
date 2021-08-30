//Inicio declaración variables
let nombre_usuario   = document.getElementById('nombre');
let apellido_usuario = document.getElementById('apellido');
let botonPost        = document.querySelector("#post_button");
let correo_usuario   = document.getElementById('correo');
let telefono_usuario = document.getElementById('telefono');
let mensaje_usuario  = document.getElementById('mensaje'); 
//Fin declaración variables 

let localStorageKeyName = 'usuarios';

//Declaración constantes para regex
const nombre_valido = nombre => {
  return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(nombre);
}

const apellido_valido = apellido => {
  return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(apellido);
}

const correo_valido = correo => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo);
}

const telefono_valido = telefono => {
  return /^\d{2}\d{8}$/.test(telefono);
}
//NOTA 3: BUSCAAR REGEX CORRECTO PARA MENSAJE
const mensaje_valido = mensaje => {
return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(mensaje);
}

//Inicio window.onload
window.onload = function () {

    botonPost.addEventListener('click', (e) => {
    e.preventDefault();
    //Inicio de validador nombre de usuario
    if (!nombre_valido(nombre.value)) {
      Swal.fire({
        icon: 'warning',
        title: 'ALERTA',
        text: 'Por favor, escribe un nombre de usuario válido',
        confirmButtonText: "Aceptar",
      });
      nombre.focus();
      return false;
    }//Fin de validador nombre de usuario 

    //Validador mensaje NOTA 2: BUSCAR UN VALIDADOR CORRECTO PARA MENSAJE
    if (!apellido_valido(apellido.value)) {
      Swal.fire({
        icon: 'warning',
        title: 'ALERTA',
        text: 'Por favor, es necesario escribir un mensaje',
        confirmButtonText: "Aceptar",
      });
      apellido.focus();
      return false;
    } //Fin validador mensaje

     //Validador correo electrónico
    if (!correo_valido(correo.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un correo electronico válido',
           });
        correo.focus();
        return false;
    } //Fin validador correo electrónico

     //Validador teléfono
     if (!telefono_valido(telefono.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un telefono válido',
          });
        telefono.focus();
        return false;
    } //Fin validador teléfono

     //Validador mensaje NOTA 2: BUSCAR UN VALIDADOR CORRECTO PARA MENSAJE
     if (!mensaje_valido(mensaje.value)) {
      Swal.fire({
          icon: 'warning',
          title: 'MENSAJE',
          text: 'Por favor, es necesario escribir un mensaje',
        });
      mensaje.focus();
      return false;
  } //Fin validador mensaje
   
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })      
    Toast.fire({
      icon: 'success',
      title: 'Datos enviados exitosamente'
    })
  
    let user = {
      tipo_usuario: "Usuario",
      nombre_usuario:nombre.value,
      apellido_usuario: apellido.value,            
      correo_usuario: correo.value,
      telefono_usuario: telefono.value,
      mensaje_usuario: mensaje.value, 
    };   

      nombre.value = '';
      apellido.value = ''; 
      correo.value = ''; 
      telefono.value = '';  
      mensaje.value = '';  

    appendObjectToLocalStorage(user);
    }
)
    function appendObjectToLocalStorage(objetoUsuario) {
      let users = [],
      dataInLocalStorage = localStorage.getItem(localStorageKeyName);

      if (dataInLocalStorage !== null) {
        users = JSON.parse(dataInLocalStorage);
      }

      users.push(objetoUsuario);
      localStorage.setItem(localStorageKeyName, JSON.stringify(users));     
    }
  
}//Fin Window.onload
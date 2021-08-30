const btnEnviar = document.getElementById('btn-enviar');

//Validador campos
const validate = (validador) => {
    validador.preventDefault();
    //Inicio declaración constantes
    const nombre_profesor   = document.getElementById('nombreProfesor');
    const apellido_profesor = document.getElementById('apellidoProfesor');
    const usuario_profesor  = document.getElementById('usuarioProfesor');
    const correo_profesor   = document.getElementById('correoProfesor');
    const telefono_profesor = document.getElementById('telefonoProfesor');
    const password_profesor = document.getElementById('passwordProfesor');
    const repite_password   = document.getElementById('repitePassword');
    //Fin declaración constantes  

    //Validador nombre
    if (!nombre_valido(nombreProfesor.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un nombre válido',
          });
        nombreProfesor.focus();
        return false;
    }//Fin validador nombre

    //Validador apellido
    if (!apellido_valido(apellidoProfesor.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un apellido válido',
          });
        apellidoProfesor.focus();
        return false;
    } //Fin validador apellido 

    //Validador usuario
    if (!usuario_valido(usuarioProfesor.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un usuario válido',
          });
       usuarioProfesor.focus();
       return false;
    } //Fin validador usuario
          
    //Validador teléfono
    if (!telefono_valido(telefonoProfesor.value)) {
        Swal.fire({
          icon: 'warning',
          title: 'MENSAJE',
          text: 'Por favor, escribe un telefono válido',
        });
      telefonoProfesor.focus();
      return false;
     } //Fin validador teléfono

    //Validador correo electrónico
    if (!correo_valido(correoProfesor.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un correo electronico válido',
           });
        correoProfesor.focus();
        return false;
    } //Fin validador correo electrónico    
  
    //Validador passwords   
    passwordProfesor = document.getElementById('passwordProfesor');
    repitePassword   = document.getElementById('repitePassword');
    
    if (passwordProfesor.value != repitePassword.value) {       
        Swal.fire({
          icon: 'warning',
          title: 'MENSAJE',
          text: 'Por favor, verifica que tu contraseña sea la misma',
        });
      passwordProfesor.focus(); 
      return false;
    } //Fin validador passwords
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
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
        nombre_profesor: nombre_profesor.value,
        tipo_usuario: "Profesor",
        apellido_profesor: apellido_profesor.value,
        usuario_profesor: usuario_profesor.value,
        correo_profesor: correo_profesor.value,
        telefono_profesor: telefono_profesor.value,
        password_profesor: password_profesor.value,
        password_profesor: repite_password.value,
      }

      nombre_profesor.value = '';
      apellido_profesor.value = '';
      usuario_profesor.value = '';  
      correo_profesor.value = ''; 
      telefono_profesor.value = '';  
      password_profesor.value = ''; 
      repite_password.value = ''; 

      appendObjectToLocalStorage(user);
      return true;
}
//Fin validador campos

  function appendObjectToLocalStorage(object){
    let profesor = [],
    dataInLocalStorage = localStorage.getItem('profesor');
  
    if (dataInLocalStorage !== null) 
    {
    profesor = JSON.parse(dataInLocalStorage);
    }
    profesor.push(object);
    localStorage.setItem('profesor', JSON.stringify(profesor));
  }  

//Declaración constantes para regex
const nombre_valido = nombreProfesor => {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(nombreProfesor);
}

const apellido_valido = apellidoProfesor => {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(apellidoProfesor);
}

const usuario_valido = usuarioProfesor => {
  return /^[a-zA-Z0-9-_.]+$/u.test(usuarioProfesor);
}

const correo_valido = correoProfesor => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correoProfesor);
}

const telefono_valido = telefonoProfesor => {
    return /^\d{2}\d{8}$/.test(telefonoProfesor);
}

btnEnviar.addEventListener('click', validate);
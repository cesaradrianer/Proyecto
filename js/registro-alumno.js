const btnEnviar = document.getElementById('btn-enviar');

//Validador campos
const validate = (validador) => {
    validador.preventDefault();
    //Inicio declaración constantes
    const nombre_alumno   = document.getElementById('nombreAlumno');
    const apellido_alumno = document.getElementById('apellidoAlumno');
    const usuario_alumno  = document.getElementById('usuarioAlumno');
    const correo_alumno   = document.getElementById('correoAlumno');
    const telefono_alumno = document.getElementById('telefonoAlumno');
    const password_alumno = document.getElementById('passwordAlumno');
    const repite_password = document.getElementById('repitePassword');
    //Fin declaración constantes

    //Validador nombre
    if (!nombre_valido(nombreAlumno.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un nombre válido',
          });
        nombreAlumno.focus();
        return false;
    }//Fin validador nombre

    //Validador apellido
    if (!apellido_valido(apellidoAlumno.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un apellido válido',
          });
        apellidoAlumno.focus();
        return false;
    } //Fin validador apellido 

    //Validador usuario
    if (!usuario_valido(usuarioAlumno.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un usuario válido',
          });
       usuarioAlumno.focus();
       return false;
    } //Fin validador usuario
    
     //Validador teléfono
     if (!telefono_valido(telefonoAlumno.value)) {
      Swal.fire({
          icon: 'warning',
          title: 'MENSAJE',
          text: 'Por favor, escribe un telefono válido',
        });
      telefonoAlumno.focus();
      return false;
  } //Fin validador teléfono

    //Validador correo electrónico
    if (!correo_valido(correoAlumno.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un correo electronico válido',
           });
        correoAlumno.focus();
        return false;
    } //Fin validador correo electrónico    
  
    //Validador passwords   
    passwordAlumno = document.getElementById('passwordAlumno');
    repitePassword = document.getElementById('repitePassword');
    
    if (passwordAlumno.value != repitePassword.value) {       
        Swal.fire({
          icon: 'warning',
          title: 'MENSAJE',
          text: 'Por favor, verifica que tu contraseña sea la misma',
        });
      passwordAlumno.focus(); 
      return false;
    } //Fin validador passwords
    
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
        nombre_alumno: nombre_alumno.value,
        tipo_usuario: "Alumno",
        apellido_alumno: apellido_alumno.value,
        usuario_alumno: usuario_alumno.value,
        correo_alumno: correo_alumno.value,
        telefono_alumno: telefono_alumno.value,
        password_alumno: password_alumno.value,
        password_alumno: repite_password.value,
      }

      nombre_alumno.value = '';
      apellido_alumno.value = '';
      usuario_alumno.value = '';  
      correo_alumno.value = ''; 
      telefono_alumno.value = '';  
      password_alumno.value = ''; 
      repite_password.value = ''; 

      appendObjectToLocalStorage(user);
      return true;
}
//Fin validador campos

function appendObjectToLocalStorage(object){
  let alumno = [],
  dataInLocalStorage = localStorage.getItem('alumno');

  if (dataInLocalStorage !== null) 
  {
  alumno = JSON.parse(dataInLocalStorage);
  }
  alumno.push(object);
  localStorage.setItem('alumno', JSON.stringify(alumno));
}

//Declaración constantes para regex
const nombre_valido = nombreAlumno => {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(nombreAlumno);
}

const apellido_valido = apellidoAlumno => {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(apellidoAlumno);
}

const usuario_valido = usuarioAlumno => {
  return /^[a-zA-Z0-9-_.]+$/u.test(usuarioAlumno);
}

const correo_valido = correoAlumno => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correoAlumno);
}

const telefono_valido = telefonoAlumno => {
    return /^\d{2}\d{8}$/.test(telefonoAlumno);
}

btnEnviar.addEventListener('click', validate);
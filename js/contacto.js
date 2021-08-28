const btnEnviar = document.getElementById('btn-enviar');

//Validador campos
const validate = (validador) => {
    validador.preventDefault();
    const nombre_usuario = document.getElementById('nombre');
    const apellido_usuario = document.getElementById('apellido');
    const correo_electronico = document.getElementById('email');
    const num_telefono = document.getElementById('telefono');
    const mensaje = document.getElementById('mensaje');

    //Validador nombre
    if (!nombre_valido(nombre.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un nombre válido',
          });
        nombre.focus();
        return false;
    }//Fin validador nombre

    //Validador apellido
    if (!apellido_valido(apellido.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un apellido válido',
          });
        apellido.focus();
        return false;
    } //Fin validador apellido 

    //Validador correo electrónico
    if (!correo_valido(email.value)) {
        Swal.fire({
            icon: 'warning',
            title: 'MENSAJE',
            text: 'Por favor, escribe un correo electronico válido',
           });
        email.focus();
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
   /*  sendEmail();  */
    document.getElementById("contact-form").reset();
    return true;
}//Fin validador campos

function saveInStorage(){
    let nombre= document.getElementById("nombre");
    localStorage.setItem("nombre", nombre.value);

    let apellido= document.getElementById("apellido");
    localStorage.setItem("apellido", apellido.value);

    let email= document.getElementById("email");
    localStorage.setItem("email", email.value);

    let telefono= document.getElementById("telefono");
    localStorage.setItem("telefono", telefono.value);

    let mensaje= document.getElementById("mensaje");
    localStorage.setItem("mensaje", mensaje.value);
}

function sendEmail() {
  let dirEmail = "mailto:soporte@redsocial.com"             
           + "&subject=" + encodeURIComponent("Contacto usuario red social")
           + "&body=" + encodeURIComponent(document.getElementById('mensaje').value)
  ;    
  window.location.href = dirEmail;
}

//Declaración constantes para regex
const nombre_valido = nombre => {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(nombre);
}

const apellido_valido = apellido => {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(apellido);
}

const correo_valido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

const telefono_valido = telefono => {
    return /^\d{2}\d{8}$/.test(telefono);
}
//NOTA 3: BUSCAAR REGEX CORRECTO PARA MENSAJE
const mensaje_valido = mensaje => {
  return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(mensaje);
}

btnEnviar.addEventListener('click', validate);
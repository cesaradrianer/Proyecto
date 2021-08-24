$(document).ready(function(){
  $('#txtUsuario').focus();
});

// Generamos el evento Submit de nuestro formulario
$("#formLogin").submit(function(e){
 e.preventDefault();
  //Asignamos el valor al objeto SessionStorage
 sessionStorage.setItem('usuario',$('#txtUsuario').val());
  //Asignamos el valor al objeto localStorage
 localStorage.setItem('password',$('#txtPassword').val());
 window.location = 'perfil-alumno.html';
});
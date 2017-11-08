var botonEnviar = document.getElementById('btn');
var contador = document.getElementById('count');
var noSpace = false;

/*para que el boton comience deshabilitado llamamos a la funcion creada mas abajo*/
validarBoton(false);
/*función para almacenar los comentarios al hacer click*/
function add(){
  /*almacenar el valor que entrega el usuario en el comentario*/
    var comments = document.getElementById("comment").value;
  /*limpiar el campo de añadir comentario del textarea*/
    document.getElementById("comment").value = "";
    /*creando la sección de comentarios*/
    var newComments = document.createElement('div');
    var cont = document.getElementById('cont');
    /*creando el p de los comentarios guardados*/
    var paragraph = document.createElement('p');
    paragraph.classList.add('color');
    /*hay que crear el texto que va dentro del p*/
    var nodoText = document.createTextNode(comments);
    /*metiendo el texto en p*/
    paragraph.appendChild(nodoText);
    /*agregando el parrafo al nuevo comentario*/
    newComments.appendChild(paragraph);
    /*ahora hay que agregar el newcomments al div cont*/
    cont.appendChild(newComments);
    /*deshabilitar el boton al hacer postear un tweet*/
    validarBoton(false);
    document.forms[0].caracteres.value=140;
}
/*funcion para contar los caracteres*/
function cuenta(){
  /*rescatar el codigo ascii de las teclas presionadas, ahora sabemos que tecla estamos presionando*/
    var x = event.keyCode;
    if(x > 32){
      noSpace = true;
    }
    /*sabemos que la tecla enter tiene número 13*/
    if(x == 13){
      document.getElementById('comment').rows = document.getElementById('comment').rows + 1;
    }
  /*console.log(x);*/
    document.forms[0].caracteres.value=140-(document.forms[0].comment.value.length);
    /*deshabilitar el boton tweet*/
    if(document.forms[0].comment.value.length > 0 && noSpace ==true){
      validarBoton(true);
    }
    else {
      validarBoton(false)
      /*cada vez que se borra lo escrito el valor de noSpace vuelve a false para que se desactive el botón*/
      noSpace = false;
    }
    if(document.forms[0].comment.value.length > 140){
      validarBoton(false);
    }
    if(document.forms[0].comment.value.length > 120 && document.forms[0].comment.value.length <= 130){
      contador.classList.add('contadorGreen');
      contador.classList.remove('contador');
      contador.classList.remove('contadorRed');

    }
    else{
      contador.classList.add('contador');
      contador.classList.remove('contadorGreen');
      contador.classList.remove('contadorRed');
    }
    if(document.forms[0].comment.value.length > 130){
      contador.classList.add('contadorRed');
      contador.classList.remove('contadorGreen');
      contador.classList.remove('contador');
    }
}
/*para deshabilitar o habilitar el boton y cambiarle el color*/
function validarBoton(camposValidos){
  if (camposValidos == false) {
      botonEnviar.disabled = true;
      botonEnviar.classList.add('boton');
      botonEnviar.classList.remove('boton2');
  }
  else {
      botonEnviar.disabled = false;
      botonEnviar.classList.add('boton2');
      botonEnviar.classList.remove('boton');
      }
}

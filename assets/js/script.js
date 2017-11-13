/*guardo algunos elementos en variables que usaré después*/
var botonEnviar = document.getElementById('btn');
var contador = document.getElementById('count');
var textarea = document.getElementById('comment');
var noSpace = false;
/*para que el cursor esté en el textarea cuando se ingresa a la página*/
textarea.focus();
/*para que el boton comience deshabilitado llamamos a la funcion creada mas abajo*/
validarBoton(false);
/*función para almacenar los comentarios al hacer click*/
function add(){
  /*almacenar el valor que entrega el usuario en el comentario*/
    var comments = textarea.value;
  /*limpiar el campo de añadir comentario del textarea*/
    textarea.value = "";
    /*creando la sección de comentarios*/
    var newComments = document.createElement('div');
    var cont = document.getElementById('cont');
    /*creando el p de los comentarios guardados*/
    var paragraph = document.createElement('p');
    paragraph.classList.add('parrafo');
    /*en este parrafo va la hora*/
    var paragraph2 = document.createElement('p');
    paragraph2.classList.add('parrafo2');
    /*hay que crear el texto que va dentro del p*/
    var nodoText = document.createTextNode(comments);
    /*formato para la hora*/
    var nodoHora = document.createTextNode(moment().format('h:mm A'));
    /*metiendo el texto en p*/
    paragraph.appendChild(nodoText);
    paragraph2.appendChild(nodoHora);

    /*agregando el parrafo al nuevo comentario*/
    newComments.appendChild(paragraph);
    newComments.appendChild(paragraph2);
    /*ahora hay que agregar el newcomments al div cont*/
    cont.appendChild(newComments);
    /*deshabilitar el boton al postear un tweet*/
    validarBoton(false);
    document.forms[0].caracteres.value=140;
}
/*funcion para contar los caracteres*/
function cuenta(){
    document.forms[0].caracteres.value=140-(document.forms[0].comment.value.length);
  /*rescatar el codigo ascii de las teclas presionadas, ahora sabemos que tecla estamos presionando*/
    var x = event.keyCode;
    /*sabemos que la tecla enter tiene número 13*/
    if(x > 32){
      noSpace = true;
    }
    /* para que bajara si presionaba enter, pero ahora no es necesario porque usé la función autosize
    if(x == 13){
      textarea.rows = textarea.rows + 1;
    }*/
    /*pasar a array el valor del comentario para verificar que no se pueda agregar un comentario vacio después de insertar un espacio vacio, una letra y borrarla*/
    var arrayComments = document.forms[0].comment.value.split('');
    /*console.log(arrayComments);*/
    /*inventamos una variable que sea el resultado de la busqueda de un espacio en blanco*/
    var search = false;
    /*verificamos letra por letra con un for si el caracter es vacio o no*/
    for(var i=0; i<document.forms[0].comment.value.length; i++){
      if (arrayComments[i].charCodeAt(0)>32){
        search = true;
      }
    }
    /*deshabilitar el boton tweet*/
    if(document.forms[0].comment.value.length > 0 && noSpace ==true && search==true){
      /*boton habilitado*/
      validarBoton(true);
    }
    else {
        /*boton deshabilitado*/
      validarBoton(false)
      /*cada vez que se borra lo escrito el valor de noSpace vuelve a false para que se desactive el botón*/
      noSpace = false;
    }
    if(document.forms[0].comment.value.length > 140){
      validarBoton(false);
    }
    if(document.forms[0].comment.value.length > 120 && document.forms[0].comment.value.length <= 130){
      contador.classList.add('contadorOrange');
      contador.classList.remove('contador');
      contador.classList.remove('contadorRed');

    }
    else{
      contador.classList.add('contador');
      contador.classList.remove('contadorOrange');
      contador.classList.remove('contadorRed');
    }
    if(document.forms[0].comment.value.length > 130){
      contador.classList.add('contadorRed');
      contador.classList.remove('contadorOrange');
      contador.classList.remove('contador');
    }
}
/*función para que el textarea se ajuste al texto usando eventos*/
textarea.addEventListener('keydown', autosize);
function autosize(){
  var long = this;
  setTimeout(function(){
    long.style.cssText = 'height:auto; padding:0';
    long.style.cssText = 'height:' + long.scrollHeight + 'px';
    console.log(long.scrollHeight);
  });
}
/*función para deshabilitar o habilitar el boton y cambiarle el color*/
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

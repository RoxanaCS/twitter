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
    newComments.appendChild(paragraph);
    /*ahora hay que agregar el newcomments al div cont*/
    cont.appendChild(newComments);
}

function ValidaCampos(form) {

    var expresion_regular_dni = /^\d{2}[.]\d{3}[.]\d{3}[-][A-Z]{1}$/;

    var expresion_regular_tel = /[+34][ ]\d{9}$/;

    var expresion_regular_hora = /^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/;

    var nombre = document.getElementById("nombre").value.split(" ");

    var apellido = document.getElementById("apellidos").value.split(" ");

    var comentarios = document.getElementById("comentarios").value;

    if(expresion_regular_dni.test(form.dni.value)==false) {
    alert("El campo del DNI no es válido");
    return false;
    }

    if(nombre.length > 2 || nombre == "")
    {
        alert("El campo del nombre no es válido");
        return false
    }

    if(apellido.length > 2 || apellido == "")
    {
        alert("El campo del apellido no es válido");
        return false
    }

    if(expresion_regular_tel.test(form.telefono.value)==false) {
        alert("El campo del telefono no es válido");
        return false;
        
    }
    
    if(comentarios == null || comentarios.length == 0 || comentarios.length > 250)
    {
        alert("El campo de comentarios no es válido");
        return false;
    }

    if(expresion_regular_hora.test(form.hora.value)==false)
    {
        alert("El campo de la hora no es válido");
        return false;
    }

    alert("Gracias por rellenar nuestro formulario correctamente.");

    return true;
}
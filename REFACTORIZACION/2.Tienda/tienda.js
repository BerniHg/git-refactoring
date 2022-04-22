function inventario(tipo, articulo, talla, cantidad)
{
    this.tipo = tipo;
    this.articulo = articulo;
    this.talla = talla;
    this.cantidad = cantidad;
}

var arrayprod = [];

function enviar()
{
    var art = new inventario(document.getElementById("tipo").value, document.getElementById("articulo").value, parseInt(document.getElementById("talla").value), parseInt(document.getElementById("cantidad").value));

    arrayprod.push(art);

    alert("Objeto enviado");
}

function escribir(objeto)
{
    return objeto.tipo +" / " + objeto.articulo + " / " + objeto.talla + " / " + objeto.cantidad;
}

function eliminar()
{
    var text = [];

    if(arrayprod.length==0)
    {
        alert("No hay productos.");
    }
    else
    {
        for(i=0; i<arrayprod.length; i++)
        {
            text.push(escribir(arrayprod[i]));
   
            text.push("\n");
    
        }
    
        var el = parseInt(prompt("¿Cual de estos productos quieres eliminar? (Indique la posición) \n" +text));

        while( el < 0 || el>arrayprod.length)

        {

            el = parseInt(prompt("No hay tantos productos..."));

        }
    

        if(el!=0)

        {

            alert("El producto número "+el+" eliminado.");

            el = el - 1;

            arrayprod.splice(el, 1);

        }

        else

        {

            alert("No se eliminó ningún objeto.");

        }

    }
}

function total()
{
    var text = document.getElementById("prod").value;
    var cant = 0;

    for(i = 0; i<arrayprod.length; i++)
    {
        if(text == arrayprod[i].tipo)    
        {
            cant = cant + parseInt(arrayprod[i].cantidad);
        }
    }

    if(cant==0 || arrayprod.length==0)
    {
        alert("No hay productos.");
    }
    else
    {
        alert("De tipo " + text + " hay un total de " + parseInt(cant));
    }
}

function alistar()
{
    var text = document.getElementById("list").value;
    var text2 = [];

    if(arrayprod.length==0)
    {
        alert("No hay productos.");
    }
    else
    {
        for(i=0; i<arrayprod.length; i++)
        {
            if(arrayprod[i].tipo==text)
            {
                text2.push(escribir(arrayprod[i]));
                text2.push("\n");
            }
    
        }

        if(text2.length!=0)
        {
            alert(text2);
        }
        else
        {
            alert("No hay productos.");
        }
    }
    
}
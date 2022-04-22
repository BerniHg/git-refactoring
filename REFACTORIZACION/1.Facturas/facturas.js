function comp () {
  const inpObj = document.getElementById('cifc')
  return inpObj.checkValidity()
}

function calc () {
  let tot = 0; let totp = 0; const iva = 21 / 100

  const factura = {
    nombreemp: document.getElementById('nomemp').value,
    cifemp: document.getElementById('cifemp').value,
    direccionemp: document.getElementById('direcemp').value,
    nombrecli: document.getElementById('nomc').value,
    cifcli: document.getElementById('cifc').value,
    direccioncli: document.getElementById('dirc').value,
    ivatot: iva,
    totpag: tot,
    totprod: totp
  }

  function product (descripcion, precio, cantidad) {
    this.descripcion = descripcion,
    this.precio = parseFloat(precio),
    this.cantidad = parseInt(cantidad)
  }

  const product1 = new product(document.getElementById('p1').value, 12.50, document.getElementById('pr1').value)
  const product2 = new product(document.getElementById('p2').value, 10.99, document.getElementById('pr2').value)
  const product3 = new product(document.getElementById('p3').value, 15.00, document.getElementById('pr3').value)
  const product4 = new product(document.getElementById('p4').value, 18.00, document.getElementById('pr4').value)
  const product5 = new product(document.getElementById('p5').value, 9.50, document.getElementById('pr5').value)

  totp = product1.cantidad + product2.cantidad + product3.cantidad + product4.cantidad + product5.cantidad

  if (totp == 0) {
    alert('No has comprado nada...')
  } else if (factura.nombrecli == '' || factura.cifcli == '' || factura.direccioncli == '') {
    alert('Rellena los datos...')
  } else if (comp() == false) {
    alert('Escribe correctamente el CIF...')
  } else {
    tot = (product1.cantidad * product1.precio) + (product2.cantidad * product2.precio) + (product3.cantidad * product3.precio) + (product4.cantidad * product1.precio) + (product5.cantidad * product1.precio)

    factura.ivatot = iva * tot
    factura.totpag = (tot + factura.ivatot).toFixed(2)
    factura.totprod = totp

    document.getElementById('res').innerHTML = 'Gracias por tu compra ' + factura.nombrecli + '. Tus datos sobre el envío fueron registrados con éxito(' + factura.cifcli + '//' + factura.direccioncli + ').<br><br><br> Has comprado de productos la cantidad de ' + factura.totprod + ', gastando un total de ' + factura.totpag + ' € (IVA sumado: ' + factura.ivatot.toFixed(2) + ' €).<br><br><br>Esperamos su próxima compra!'
    alert('Mira abajo del cuadro')
  }
}

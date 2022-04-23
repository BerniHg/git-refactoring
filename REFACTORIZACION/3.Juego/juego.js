function funcion19 () {
  let dinero = 50; let apuesta; let num; let numr

  while (dinero < 1 || dinero <= 200) {
    apuesta = parseInt(prompt('Introduce tu apuesta:'))

    while (apuesta > dinero || apuesta <= 0) {
      apuesta = parseInt(prompt('Incorrecto, vuelve a escribirla:'))
    }

    numr = parseInt(prompt('Elige un número:'))

    while (numr < 1 || numr > 6) {
      numr = parseInt(prompt('Incorrecto, vuelve a escribirlo:'))
    }
    num = Math.floor(Math.random() * 6) + 1
    if (num == numr) {
      dinero = dinero + 2 * apuesta
      alert('Has acertado!')
    } else {
      dinero = dinero - apuesta
      alert('Has fallado...')
    }
    alert('Tienes ' + dinero + ' €')
    if (dinero == 0) {
      break
    }
  }

  if (dinero == 0) {
    alert('Has perdido todo tu dinero...')
  } else if (dinero >= 200) {
    alert('Has ganado, enhorabuena!!!!')
  }
}

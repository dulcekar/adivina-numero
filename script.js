function adivinarNumero( ) {
    let min = 1;
    let max = 100;
    let intentos = 0;
  
    for (;;) {
      intentos++;
      let candidato = Math.floor((min + max) / 2);
      let respuesta = confirm(`¿Tu número es: ${candidato}?`);
  
      if (respuesta) {
        alert(`¡Tu número es ${candidato}! ¡Excelente decisión!\nNúmero de intentos: ${intentos}`);
        break;
      } else {
        let mayorQueCandidato = confirm(`¿Es tu número mayor que ${candidato}?`);
  
        if (mayorQueCandidato) {
          min = candidato + 1;
        } else {
          max = candidato - 1;
        }
  
        if (min > max) {
          alert("¡Ups! Parece que ha ocurrido un error.");
          break;
        }
      }
    }
  }
let hora = Number(prompt("Indicar hora"));
let minutos = Number(prompt("Indicar minutos"));
let segundos = Number(prompt("Indicar segundos"));

if (hora > 23 || minutos > 59 || segundos > 59) {
  console.log("por favor ingrese una hora válida");
} else {
  segundos++;
  if (0 === segundos % 60) {
    minutos++;
    segundos = 0;
  }
  if (0 === minutos % 60) {
    hora++;
    minutos = 0;
  }
  if (hora >= 24) {
    hora = 0;
  }
}

console.log(`Son las ${hora}hs, ${minutos}m, ${segundos}s`);

let fila = "";
let size = 16;
//fila += " ";
for (j = 0; j < size; j++) {
  for (i = 0; i < size; i++) {
    if ((j + i) % 2 !== 0) {
      fila += "#";
    } else {
      fila += " ";
    }
  }
  fila += "\n";
}
console.log(fila);

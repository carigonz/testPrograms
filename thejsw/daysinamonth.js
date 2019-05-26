let month = Number(prompt("Ingrese el número del mes correspondiente"));

switch (month) {
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  default:
    console.log("ingrese un mes válido");
    break;
}
console.log(`El mes numero ${month} tiene ${days} días`);

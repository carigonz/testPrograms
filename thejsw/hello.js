let firstName = prompt("Cual es tu nombre?");
let lastName = prompt("Cual es tu apellido?");

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

sayHello(firstName, lastName);

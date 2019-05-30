let musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach(person => {
  console.log(person);
});

musketeers.pop();

for (const person of musketeers) {
  console.log(person);
}

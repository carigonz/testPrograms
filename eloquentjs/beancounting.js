function countBs(word) {
  counter = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] === "B") {
      counter++;
    }
  }

  return counter;
}

function countChar(word, char) {
  counter = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] === char) {
      counter++;
    }
  }

  return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

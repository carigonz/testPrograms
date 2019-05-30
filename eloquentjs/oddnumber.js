function isEven(num) {
  if (num % 2 === 0) {
    return "the number is even";
  } else if (num % 2 === 1) {
    return "the number is odd";
  } else if (num < 0) {
    return "the number is negative";
  } else {
    return isEven(num - 2);
  }
}

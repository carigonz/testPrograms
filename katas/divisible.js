function isDivideBy(number, a, b) {
  if (number % a === 0) {
    if (number % b === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

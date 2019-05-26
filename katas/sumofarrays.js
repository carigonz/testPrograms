function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  arr1.forEach(function(valor) {
    sum += valor;
  });
  arr2.forEach(function(valor) {
    sum += valor;
  });
  return sum;
}

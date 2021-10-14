let ex3 = (...args) => {
  let arr = new Array();
  let count = 0;
  for (var i = 0; i < args[0].length; i++) {
    arr[count++] = args[0][i];
    arr[count++] = args[1][i];
  }
  return arr;
};
console.log(ex3(new Array(1, 2, 3, 4), new Array(5, 6, 7, 8)));

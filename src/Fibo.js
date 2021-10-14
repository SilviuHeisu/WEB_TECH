let func = (param) => {
  let n = 0;
  if (param == 0 || param == 1) return 1;

  let a = 1;
  let b = 1,
    c = 2;
  while (param != n) {
    a = b;
    b = c;
    c = a + b;
    n++;
  }
  return c;
};
console.log(func(process.argv[2]));

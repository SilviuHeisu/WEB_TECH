function ex2(par1, par2) {
  if (par1.length != par2.length) return -1;
  let count = 0;
  for (let i = 0; i < par1.length; i++) {
    if (par1[i] !== par2[i]) count++;
  }
  count++;
  return count;
}
console.log(ex2("Alo", "Cdo"));

let aparitii = (sent) => {
  let words = sent.split(" ");
  let ap = {};
  for (let word of words) {
    for (let i = 0; i < word.length; i++)
      if (ap[word[i]] in ap) ap[word[i]] += 1;
      else ap[word[i]]++;
  }
  return ap;
};
console.log(aparitii("Ana are mere"));

var prompt = require(`prompt-sync`)();
let a = parseFloat(prompt('Entrez la valeur de a : '));
let b = parseFloat(prompt('Entrez la valeur de b : '));
let c = parseFloat(prompt('Entrez la valeur de c : '));
let delta = b**2 - 4*a*c;
if (delta > 0) {
  console.log('L\'équation a deux solutions réelles distinctes');
}
else if (delta === 0) {
  console.log('L\'équation a une solution réelle double');
}
else {
  console.log('L’équation n’a pas de solution réelle');
}
var prompt = require('prompt-sync')();

let a = parseInt(prompt('Entrez le nombre : '));
if (a % 2 !== 0) {
  console.log('Le nombre est impair');
} else {
  console.log('Le nombre est pair');
}   
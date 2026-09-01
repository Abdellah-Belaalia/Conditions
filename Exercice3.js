var prompt = require(`prompt-sync`)();

let a = parseInt(prompt(`Entrez le premier nombre : `));
let b = parseInt(prompt(`Entrez le deuxième nombre : `)); 
console.log(`la somme de ${a} et ${b} est : ${a + b}`);
if (a == b) {
    console.log(`les deux nombres sont égaux donc la somme est : ${a+b}*3 = ${ (a + b)*3}`);
}

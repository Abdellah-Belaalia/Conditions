var prompt = require('prompt-sync')();

let letter = prompt('Entrez un caractère : ').toLowerCase();
switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log('Le caractère est une voyelle');
        break;
    default:
        console.log('Le caractère est une consonne');
}
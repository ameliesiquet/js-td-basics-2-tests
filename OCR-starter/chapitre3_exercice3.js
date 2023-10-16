// Seconde suivante

/*
- Stockez dans trois variables
    * l'heure actuelle
    * les minutes actuelles
    * les secondes actuelles
- … (TODO)
*/
const heureactuelle = new Date;

const heures = heureactuelle.getHours();
const minutes =heureactuelle.getMinutes();
const secondes = heureactuelle.getSeconds();

console.log(`Temps actuel:${heures},${minutes},${secondes}`)

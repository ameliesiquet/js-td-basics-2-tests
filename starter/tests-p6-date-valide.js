/*
TESTS - PRÉPA 6 : Date valide
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
*/

/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/

/* Aide supplémentaire
 - Vous pouvez stocker dans une varaible maxJours le nombre de jours autorisés pour chaque mois :
	 - traiter le cas du mois de février où ce sera 28 ou 29 selon que l'année est bissextile ou pas ;
	 - puis traiter les cas où ce sera 30 ;
	 - dans les autres cas, c'est 31 ;
 - Il ne reste plus ensuite qu'à comparer le jour entré par l'utilisateur avec maxJour pour retourner true ou fasle
  selon que la date est valide ou pas.
  */

const jour = parseInt(prompt(`Entrez un jour`));
const mois = parseInt(prompt(`Entrez un mois`));
const annee = parseInt(prompt(`Entrez une annee`));

let isValide = true; /* let weil das sich danach noch ändern wird true oder false*/

if (annee < 0) {
    isValide = false;
}
if (mois > 12 || mois < 0) {
    isValide = false;
}
if (jour < 0 || jour > 31) {
    isValide = false;
}

switch (mois) {
    case 2:
        if ((annee % 4 === 0 && !(annee % 100 === 0)) || (annee % 400 === 0)) {
            if (jour > 29) {
                isValide = false;
            }
        } else if (jour > 28) {
            isValide = false
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        if (jour > 30) {
            isValide = false;
        }
        break;
}


let result = "Le " + jour;
if (isValide) {
    switch (mois) {
        case 1:
            result += "janvier ";
            break;
        case 2:
            result += "février ";
            break;
        case 3:
            result += "mars ";
            break;
        case 4:
            result += "avril ";
            break;
        case 5:
            result += "mai ";
            break;
        case 6:
            result += "juin ";
            break;
        case 7:
            result += "juillet ";
            break;
        case 8:
            result += "aout ";
            break;
        case 9:
            result += "septembre ";
            break;
        case 10:
            result += "octobre ";
            break;
        case 11:
            result += "novembre ";
            break;
        case 12:
            result += "décembre ";
            break;
    }
    result += annee;
    result += " est une date valide";
} else {
    console.log(`Votre date n'est pas valide`);
}
console.log(result);

do {
    isValide = parseInt(prompt("Entrez une date"));
} while (isValide===false){

}
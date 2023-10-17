// Jour suivant

/* 
- Stockez le jour actuel (nom du jour, type texte) dans une constante
- Ecrivez des tests qui stockent dans une variable le nom du jour suivant dans chaque cas de figure 
et, si le nom du jour qui se trouve dans la constante n'est pas un des 7 de jours de la semaine,
affiche dasn la console "Erreur : jour non reconnu !"
- Testez si la variable qui conntienyt le nom du jour n'ets pas vide et,
dans ce cas, affichez dans la console le message "Demain, nous serons …"
*/
const jouractuel ="llol";
let joursuivant;

switch (jouractuel){
    case "lundi":
        joursuivant= "mardi";
        break;
    case "mardi":
        joursuivant= "mercredi";
        break;
    case "mercredi":
        joursuivant= "jeudi";
        break;
    case "jeudi":
        joursuivant= "vendredi";
        break;
    case "vendredi":
        joursuivant= "samedi";
        break;
    case "samedi":
        joursuivant= "dimanche";
        break;
    default:
        console.log("Erreur : jour non reconnu !");
}
if (joursuivant){
    console.log(`Demain nous serons ${joursuivant}`)
}else{
}

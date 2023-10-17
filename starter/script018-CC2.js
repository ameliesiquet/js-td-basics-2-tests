/*****************************
* CODING CHALLENGE 2
*/

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, L'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
	et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
	N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen)
4. BONUS : Mary jour aussi au basket, et son équipe a marqué 97, 134 et 105 points.
	Comme avant, imprimez le gagnant en moyenne dans la console.
	INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision. 
5. Changez là aussi les scores pour générer différents gagnants,
	en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus
const scoreJohn= [89, 120, 103];
const scoreMike = [116,94,123];

/* calculer moyenne : (1+2+3) /3 */
const moyenneJohn = (89+120+103)/3;
const moyenneMike = (116+94+123)/3;

if (moyenneJohn>moyenneMike){
    console.log(`L'équipe de John gagne avec ${moyenneJohn}`);
}
else if (moyenneJohn===moyenneMike){
    console.log("Les deux équipes ont le même score");
}
else{
    console.log(`L'équipe de Mike gagne avec ${moyenneMike}`)
}

// avec bonus



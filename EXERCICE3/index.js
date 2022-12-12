document.addEventListener("DOMContentLoaded", function () {

    // Ecrire un algorithme qui vous demande d'entrer une suite de nombre et qui vous affiche ensuite le plus petit nombre, le plus grand nombre, la somme et la moyenne de la suite.

    let suiteNumbers = [10, 20, 30, 40];

    // application de la méthode static Math.min /. max pour le + petit et plus grand nombre du tableau

    let numberMin = Math.min.apply(null, suiteNumbers);
    let numberMax = Math.max.apply(null, suiteNumbers);

    let sum = 0;

    for (let i = 0; i < suiteNumbers.length; i++) {  // boucle sur le tableau pour calculer la somme
        sum += suiteNumbers[i];
    }
    let average = sum / suiteNumbers.length  //calcul de la moyenne avec la somme et la longueur du tableau

    console.log(`Le plus petit nombre est ${numberMin}`);
    console.log(`Le plus grand nombre est ${numberMax}`);
    console.log(`La somme des nombres est égale à ${sum}`);
    console.log(`La moyenne des nombres est égale à ${average}`);



})
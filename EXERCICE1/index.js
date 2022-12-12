document.addEventListener("DOMContentLoaded", function () {

    // Écrire un algorithme permettant de faire la somme d'un tableau. 

    const array = [15, 20, 10, 5]; //définition des variables
    let sum = 0;

    for (let i = 0; i < array.length; i++) { // boucle sur chaque éléments du tableau en fonction de sa longueur
        sum += array[i];                      // ajout des éléments du tableau entre eux 

    }

    console.log(sum);


})
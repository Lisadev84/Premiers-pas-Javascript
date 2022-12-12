document.addEventListener("DOMContentLoaded", function () {
    //let answer = document.getElementById("answer")
    // const bouton = document.getElementById("bouton");

    //Écrire un algorithme qui permet de recherche un élément dans un tableau d'entiers. Le tableau est entré dans l'algo. On demande de saisir un nombre. On renvoie sa position si le nombre est dans le tableau.

    const array = [10, 51, 47, 18, 63];
    let number = parseInt(prompt("Entrez un nombre"), 10);

    if (array.indexOf(number) != -1) {
        console.log(`Le "${number}" est à la position "${array.indexOf(number)}"`);
        // answer.innerHTML = `Le "${number}" est la position "${array.indexOf(number)}"`;
    } else {
        return console.log(`"${number}" ne se trouve pas dans le tableau`);
    }


    // bouton.addEventListener('click', onConfirm);




})



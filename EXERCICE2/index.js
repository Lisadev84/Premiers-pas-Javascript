document.addEventListener("DOMContentLoaded", function () {


    // Ecrire un algorithme qui vous demande d'entrer une phrase et qui affiche cette phrase à l’envers.

    let mySentence = prompt("Entrez une phrase");

    function ReverseSentence(mySentence) {
        return mySentence.split("") //changement de chaîne de caractères à tableau (séparation des caractères)
            .reverse("") //inversement des caractères
            .join(""); //repasser à une chaine de caractères
    }

    console.log(ReverseSentence(mySentence));



})
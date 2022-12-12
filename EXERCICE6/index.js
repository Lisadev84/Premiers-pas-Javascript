document.addEventListener("DOMContentLoaded", function () {



    // Ecrire un algorithme qui permet de compter le nombre de voyelles dans une phrase saisie par l'utilisateur. Le traitement sera fait à l'aide d'une fonction qui compte les voyelles.

    let sentence = prompt("Entrez une phrase"); //demande à l'utilsateur
    let vowels = /[aeiouyéèêôûùàâî]/g; //variable voyelle en recherche globale (marqueur g)

    console.log(sentence);

    function countVowels(vowels) {
        return sentence.match(vowels);//méthode match() pour obtenir le nombre des voyelles dans la phrase
    }
    console.log(`La phrase contient ${sentence.match(vowels).length}`, "voyelles");












})



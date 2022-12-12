document.addEventListener("DOMContentLoaded", function () {
  // Faire un algorithme qui permet de calculer la moyenne des notes des étudiants d'une classe.  Les notes doivent être comprises entre 0 et 20. Utilisez une fonction qui prend une liste de notes et qui retourne la moyenne.

  let ratings = [10, 20, 18, 14, 3, 9]; // définition des variables
  let sum = 0;

  for (let rating of ratings) {  // boucles "for of "pour effectuer la somme du tableau
    sum += rating;
  }

  console.log(sum);

  // calcul de la moyenne
  console.log(result = sum / ratings.length); // calcul de la moyenne à partir de la somme et de la longueur du tableau







})
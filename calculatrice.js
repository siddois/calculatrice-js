<<<<<<< HEAD
 // Outil de calcul mathématique - Master 1 GL 2024
function additionner(a, b) {
return a + b;
=======
// Historique des opérations
const historique = [];
function ajouterAHistorique(operation, resultat) {
const entree = {
operation: operation,
resultat: resultat,
date: new Date().toLocaleString()
};
historique.push(entree);
>>>>>>> a3e776f22610cc3e521b398455f503b635881542
}
function afficherHistorique() {
console.log('=== Historique des calculs ===');
historique.forEach((entree, index) => {
});
}


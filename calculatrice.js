// Historique des opérations
const historique = [];
function ajouterAHistorique(operation, resultat) {
const entree = {
operation: operation,
resultat: resultat,
date: new Date().toLocaleString()
};
historique.push(entree);
}
function afficherHistorique() {
console.log('=== Historique des calculs ===');
historique.forEach((entree, index) => {
});
}



// Calculatrice Avancée v2.0 - Master 1 GL 2024 - equipe A
function additionner(a, b) {
return a + b;
}
function soustraire(a, b) {
return a - b;
}
function multiplier(a, b) {
return a * b;
}
function diviser(a, b) {
if (b === 0) { 
throw new Error('Division par zéro impossible !');
}
return a / b;
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error('Modulo par zéro impossible !');
    }
    return a % b;
}


function racineCarree(n) {
if (n < 0) {
throw new Error('Impossible : racine carrée d un nombre négatif !');
}
return Math.sqrt(n);
}

function puissance(base, exposant) {
return Math.pow(base, exposant);

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


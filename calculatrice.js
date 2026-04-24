// Calculatrice Avancée v2.0 - Master 1 GL 2024 - Équipe A
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

function racineCarree(n) {
    if (n < 0) {
        throw new Error('Impossible : racine carrée d un nombre négatif !');
    }
    return Math.sqrt(n);
}

function puissance(base, exposant) {
    return Math.pow(base, exposant);
}

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
        console.log(`${index + 1}. ${entree.operation} = ${entree.resultat}`);
    });
}

// Tests
console.log('5 + 3 =', additionner(5, 3));
console.log('10 - 4 =', soustraire(10, 4));
console.log('6 x 7 =', multiplier(6, 7));
console.log('15 / 3 =', diviser(15, 3));
console.log('√16 =', racineCarree(16));
console.log('2^10 =', puissance(2, 10));
ajouterAHistorique('5 + 3', additionner(5, 3));
ajouterAHistorique('10 - 4', soustraire(10, 4));
afficherHistorique();
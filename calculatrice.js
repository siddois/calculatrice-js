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

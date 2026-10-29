
let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let nombreVentes = 0;
let somme = 0;
let max = ventes[0];
let min = ventes[0];
let nbExceptionnelles = 0;
let caExceptionnel = 0;

for (let i = 0; i < ventes.length; i++) {

    let vente = ventes[i];

    nombreVentes++;

    somme = somme + vente;

    if (vente > max) {
        max = vente;
    }

    if (vente < min) {
        min = vente;
    }

    if (vente >= 130) {
        nbExceptionnelles++;
        caExceptionnel = caExceptionnel + vente;
    }
}

console.log("Nombre total de ventes :", nombreVentes);
console.log("CA total :", somme);
console.log("Maximum :", max);
console.log("Minimum :", min);
console.log("Ventes exceptionnelles :", nbExceptionnelles);
console.log("CA exceptionnel :", caExceptionnel);

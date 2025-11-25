let nombre1 = document.getElementById("Premier");
let nombre2 = document.getElementById("Deuxieme");


let btnAjouter = document.getElementById("btnadd");
let btnSoustraire = document.getElementById("btnsous");
let btnMultiplier = document.getElementById("btnmult");
let btnDiviser = document.getElementById("btndivi");


let impAdd = document.getElementById("impAdd");
let impSous = document.getElementById("imptSous");
let impMult = document.getElementById("impMult");
let impDiv = document.getElementById("impDiv");


function read() {
    let a = parseInt(nombre1.value);
    let b = parseInt(nombre2.value);

    if (isNaN(a)) {
        alert("Entrez une valeur au premier SVP");
        return false;
    }
    if (isNaN(b)) {
        alert("Entrez une valeur au deuxième SVP");
        return false;
    }
    return [a, b];
}


function ajouter() {
    let V = read();
    if (V) {
        impAdd.value = V[0] + V[1];
    }
}

function soustraire() {
    let V = read();
    if (V) {
        impSous.value = V[0] - V[1];
    }
}

function multiplier() {
    let V = read();
    if (V) {
        impMult.value = V[0] * V[1];
    }
}

function diviser() {
    let V = read();
    if (V) {
        if (V[1] !== 0) {
            impDiv.value = (V[0] / V[1]).toFixed(2);
        } else {
            alert("Division par zéro interdite !");
        }
    }
}


function effacer() {
    this.value = '';
    impAdd.value = '';
    impSous.value = '';
    impMult.value = '';
    impDiv.value = '';
}

btnAjouter.addEventListener("click", ajouter);
btnSoustraire.addEventListener("click", soustraire);
btnMultiplier.addEventListener("click", multiplier);
btnDiviser.addEventListener("click", diviser);

nombre1.addEventListener("focus", effacer);
nombre2.addEventListener("focus", effacer);
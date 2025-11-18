function generCouleurAleatoire() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const carreaux = document.querySelectorAll(".carreau");

const bouton = document.querySelector("#mon_button");

function appliquerCouleurs() {
  carreaux.forEach(carreau => {
    carreau.style.backgroundColor = generCouleurAleatoire();
  });
}

bouton.addEventListener("click", appliquerCouleurs);

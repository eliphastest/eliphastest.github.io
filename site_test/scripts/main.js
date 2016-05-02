/*Change le titre ma première page web en Hello world
var monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello world!';*/

//Permet, quand on clique sur l'image, de changer d'image
var monImage = document.querySelector('img');

monImage.onclick = function() {
    var maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/hida-river.jpg') {
      monImage.setAttribute ('src','images/fukushima.jpg');
    } else {
      monImage.setAttribute ('src','images/hida-river.jpg');
    }
}

/*permet de demander lors de la première fois sur la page le nom de l'utilisateur, puis
de modifier le titre en conséquence. le user peut toujours changer de nom et cela 
affecte le titre aussi*/
var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
  var monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Bienvenue, ' + monNom;
}

if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  var nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Bienvenue ' + nomEnregistré;
}

monBouton.onclick = function() {
  définirNomUtilisateur();
}


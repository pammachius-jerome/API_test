const ligne = document.createElement("p");
let codePostal;
let effaceResultat;


function traitement (codePostal) {
    url = 'https://geo.api.gouv.fr/communes?codePostal=';
    url = url.concat(codePostal);
    console.log(url);
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            for (ville of data) {
                 // Récupère l'élément HTML "resultat"
                const resultat = document.getElementById("resultat");

                // Crée une nouvelle ligne
                const ligne = document.createElement("p");
                ligne.textContent = ville.nom + " est une ville de " + ville.           population + " habitants.";

                // Ajoute la ligne à l'élément HTML "resultat"
                resultat.appendChild(ligne);
            }
        })
        .catch((err) => console.log("erreur :" + err));

}


let url = 'https://geo.api.gouv.fr/communes?codePostal=';


document.getElementById("envoyer").addEventListener("click", function() {
    console.log("écoute bonne");
});

// écoute du click pour lancer la procédure

document.getElementById("envoyer").addEventListener("click", function() {
    
    // efface la précédente recherche
    effaceResultat = document.getElementById("resultat");
    console.log("le variable effaceRultat contient" + effaceResultat)
    effaceResultat.innerHTML = "";
    
    // réinitialiser les variable
    console.log("au clik codePostal contient " + codePostal)

    codePostal = document.getElementById("codePostal").value;

    console.log("après récupération codePostal contient " + codePostal)

    // Vérifiez que le code postal est valide
    if (!/^\d{5}$/.test(codePostal)) {

        // Affiche une erreur
        alert("Le code postal n'est pas bon. Il doit être de 5 chiffres");

    } else {

        traitement(codePostal);

    }

});


let url = 'https://geo.api.gouv.fr/communes?codePostal=';
let codePostal = prompt("veuillez saisir un code postal.");
url += codePostal;

fetch(url)
    .then(Response => Response.json())
    .then(data => {
        for (ville of data) {
            console.log(ville.nom + "est une ville de " + ville.population + " habitants.");
        }
    })
    .catch((err) => console.log("erreur :" + err));
    

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/ords/RESTSCOTT/tablette') 
        .then(response => response.json())
        .then(data => {
             let i= document.getElementById('tablettes-container').innerHTML = output;
            data.items.forEach(tablette => {
                let r=document.createElement(`Numero: ${tablette.numero}, Marque: ${tablette.marque}, Couleur: ${tablette.couleur}, Prix: ${tablette.prix}€, Caméras: ${tablette.cameras}
                Description: ${tablette.description}`);
                r=this.textContent= ` `;
                i.appendChild(r);
            });


        })
        .catch(error => console.log('Erreur: ', error));
});


document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/ords/RESTSCOTT/client') 
        .then(response => response.json())
        .then(data => {
             let i= document.getElementById('client-container').innerHTML = output;
            data.items.forEach(client => {
                let r=document.createElement('');
                r=this.textContent= `Id client : ${client.num_client}, Prénom : ${client.prenom}, Nom de famille : ${client.nom},
                Numéro de téléphone : ${client.telephone}, Adresse : ${client.adresse}  `;
                i.appendChild(r);
            });

        })
        .catch(error => console.log('Erreur: ', error));
});
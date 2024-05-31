document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/ords/RESTSCOTT/tablette') 
        .then(response => response.json())
        .then(data => {
             let i= document.getElementById('commande-container').innerHTML = output;
            data.items.forEach(commande => {
                let r=document.createElement(`ID commande : ${commande.id_commande}, Entrepot : ${commande.entrepot}, 
                Date de livraison : ${commande.date_livraison}, ID client : ${client.client_num_client}`);
                r=this.textContent= ` `;
                i.appendChild(r);
            });


        })
        .catch(error => console.log('Erreur: ', error));
});
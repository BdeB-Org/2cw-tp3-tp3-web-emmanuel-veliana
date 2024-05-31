
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/ords/RESTSCOTT/ordinateur') 
        .then(response => response.json())
        .then(data => {
             let i= document.getElementById('ordinateurs-container').innerHTML = output;
            data.items.forEach(ordinateurs => {
                let r=document.createElement('');
                r=this.textContent= `Numero: ${ordinateurs.numero}Marque: ${ordinateurs.marque}, Système d'exploitation: ${ordinateurs.sys_exploitation}
                Couleur: ${ordinateurs.couleur},Prix: ${ordinateurs.prix}€, Description: ${ordinateurs.description}  `;
                i.appendChild(r);
            });


        })
        .catch(error => console.log('Erreur: ', error));
});

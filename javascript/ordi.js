
//vers 1       ???
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/ords/RESTSCOTT/ordinateur') 
        .then(response => response.json())
        .then(data => {
             let i= document.getElementById('ordinateurs-container').innerHTML = output;
            data.items.forEach(ordinateur => {
                let r=document.createElement('');
                r=this.textContent= `Marque: ${ordinateur.marque}, Système d'exploitation: ${ordinateur.sys_exploitation}
                Couleur: ${ordinateur.couleur},Prix: ${ordinateur.prix}€, Description: ${ordinateur.description}  `;
                i.appendChild(r);
            });


        })
        .catch(error => console.log('Erreur: ', error));
});

//vers 2              ???
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/ords/RESTSCOTT/ordinateur') 
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.items.forEach(ordinateur => {
                
                output += `
                    <div class="ordinateur">
                        <h3>${ordinateur.marque} ${ordinateur.numero}</h3>
                        <p>Marque: ${ordinateur.marque}</p>
                        <p>Système d'exploitation: ${ordinateur.sys_exploitation}</p>
                        <p>Couleur: ${ordinateur.couleur}</p>
                        <p>Prix: ${ordinateur.prix}€</p>
                        <p>Description: ${ordinateur.description}</p>
                    </div>
                `;
            });

           let i= document.getElementById('ordinateurs-container').innerHTML = output;

        })
        .catch(error => console.log('Erreur: ', error));
});
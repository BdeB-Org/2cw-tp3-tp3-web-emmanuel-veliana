
//vers 1   ??? 
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/ords/RESTSCOTT/tablette') 
        .then(response => response.json())
        .then(data => {
             let i= document.getElementById('tablettes-container').innerHTML = output;
            data.items.forEach(tablette => {
                let r=document.createElement(`Marque: ${tablette.marque}, Couleur: ${tablette.couleur}, Prix: ${tablette.prix}€, Caméras: ${tablette.cameras}
                Description: ${tablette.description}`);
                r=this.textContent= ` `;
                i.appendChild(r);
            });


        })
        .catch(error => console.log('Erreur: ', error));
});




//vers 2        ???
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/ords/RESTSCOTT/tablette')
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.forEach(tablette => {
                output += `
                    <div class="tablette">
                        <h3>${tablette.marque} ${tablette.numero}</h3>
                        <p>Marque: ${tablette.marque}</p>
                        <p>Couleur: ${tablette.couleur}</p>
                        <p>Prix: ${tablette.prix}€</p>
                        <p>Caméras: ${tablette.cameras}</p>
                        <p>Description: ${tablette.description}</p>
                    </div>
                `;

            });
            document.getElementById('tablettes-container').innerHTML = output;
        })
        .catch(error => console.log('Erreur: ', error));
});

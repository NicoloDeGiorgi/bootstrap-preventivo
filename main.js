'use strict';

//console.log('sono collegato');

//Input utente
const inputTipoLavoro = document.getElementById('tipo_lavoro');
const inputCodicePromozionale = document.getElementById('codice_promozionale');
const inputNome = document.getElementById('Nome');
const inputCognome = document.getElementById('Cognome');
const inputEmail = document.getElementById('Email');


// Valori per calcolo
var boolTipLavoro = false;
const prezzoBackend = 20.50;
const prezzoFrontend = 15.30;
const prezzoAnalisi = 33.60;
//ore di lavoro 6

//prezzo finale
const prezzoFinaleElement = document.getElementById('prezzoFinale');
const buttonElement = document.getElementById('submit');

//bottone
buttonElement.addEventListener('click', function () {
    let costo = 0;


    // Validazione nome utente  
    const Nome = inputNome.value;
    if (Nome !== "") {

        // Validazione cognome utente
        const Cognome = inputCognome.value;
        if (Cognome !== "") {

            // Validazione email utente
            const Email = inputEmail.value;
            if (Email !== "") {

                // Validazione lavoro utente
                const tipoLavoro = inputTipoLavoro.value;
                if (tipoLavoro === "Nullo") {
                    alert("Devi inserire un tipo di lavoro");
                }
                else if (tipoLavoro === 'Backed_Development') {
                    costo = 6 * prezzoBackend;
                    boolTipLavoro = true;
                } else if (tipoLavoro === 'Frontend_Development') {
                    costo = 6 * prezzoFrontend;
                    boolTipLavoro = true;
                } else if (tipoLavoro === 'Project_Analysis') {
                    costo = 6 * prezzoAnalisi;
                    boolTipLavoro = true;
                }

                // Validazione codici promozionali inseriti dall'utente
                const codicePromozionale = inputCodicePromozionale.value;
                let sconto = 0;
                if (codicePromozionale === 'YHDNU32' || codicePromozionale === 'JANJC63' || codicePromozionale === 'PWKCN25' || codicePromozionale === 'SJDPO96' || codicePromozionale === 'POCIE24') {
                    sconto = costo * 0.25
                }
                else if (codicePromozionale !== "") {
                    alert("Il codice promozionale inserito non è valido");
                }
                else {
                    console.log('codice non inserito');
                }

                // calcolo finale del prezzo finale con i valoi che conosciamo
                if (boolTipLavoro === true) {
                    costo = costo - sconto;
                    console.log(costo.toFixed(2));

                    prezzoFinaleElement.innerHTML = "€" + costo.toFixed(2);
                }
                //Alert email
            } else {
                alert("Inserisci un email");
            }
            //Alert cognome
        } else {
            alert("Inserisci un cognome")
        }
        //Alert nome
    } else {
        alert("Inserisci un nome");
    }


})
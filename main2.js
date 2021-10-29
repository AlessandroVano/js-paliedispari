/**
 * Pari e Dispari
 - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 - Sommiamo i due numeri
 - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 - Dichiariamo chi ha vinto.

 */


 // 1. l'utente sceglie pari o dispari
 let pariOdispari = prompt('Inserisci pari o dispari')

 if((pariOdispari !== 'pari') && (pariOdispari !== 'dispari') ) {
    alert('Errore: inserimento non valido. Assegnazione automatica: pari');
    pariOdispari = 'pari'; 
}

 // .1 l'utente sceglie un numero da 1 a 5
 let numeroUtente = parseInt( prompt('Scegli un numero tra 1 e 5') );

 if( (numeroUtente < 1) || (numeroUtente > 5) || isNaN(numeroUtente)) {
    alert('Errore: Il numero non si trova nel range 1 - 5 Assegnazione automatica: 4');
    numeroUtente = 1;
 }

 // Generiamo un numero random per il computer (sempre da 1 a 5)
 const numeroComputer = getRandomNumber(1, 5)
 console.log(numeroComputer);


 //sommiamo i due numeri
const somma = numeroUtente + numeroComputer;
console.log('somma:' , somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const sommaTot = sommaNumeri(somma)
console.log(sommaTot);


// Dichiarazione del vincitore
if (pariOdispari === sommaTot) {
    console.log('hai vinto');
} else {
    console.log ('hai perso');
}




 //Funzione numero randomico per computer
 function getRandomNumber(min, max) {
     const random = Math.floor(Math.random() * 5) +1;
     return random;
 }


//Funzione somma pari o dispari

function sommaNumeri(somma) {
    if(somma % 2 === 0) {
        return 'pari';
    }
     return 'dispari'
}
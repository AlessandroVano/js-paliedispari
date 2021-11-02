/**
 * PALINDROMA
 - Chiedere all’utente di inserire una parola
 - Creare una funzione per capire se la parola inserita è palindroma
 */

// chiedere all'utente di inserire una parola
 const generazioneParola = prompt('inserisci una parola');
 console.log(generazioneParola);



// generazione parola al contrario
const parolaInvertita = invertireParola(generazioneParola);
console.log('invertita', parolaInvertita);
//inserimento condizioni 
if(generazioneParola === parolaInvertita) {
    console.log('Palidroma'); 
    } else {
        console.log('Non Palindroma');
    }




// funzione per invertire la parola
function invertireParola(parola) {
    /* split con stringa vuota (mi porta ogni carattere della parola ad essere un elemento di un array quindi passa da stringa che era in precedenza ad array), dopo concateno reverse (essendo diventato un array mi inverte la parola) infine join (mi fa ritornare il nostro array una stringa) */
const invertire = parola.split('').reverse().join('');
//qui la funzione finisce
return invertire;
}
// Chiedere all'utente il cognome
var cognome = prompt("Qual è il tuo cognome?");
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var cognomeCapitalized = cognome.charAt(0).toUpperCase() + cognome.slice(1);

// Inserirlo in un array con altri cognomi
listaCognomi.push(cognomeCapitalized);

// Stampa la lista ordinata alfabeticamente
listaCognomi.sort()
console.log(listaCognomi);

// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
for (i = 0; i < listaCognomi.length; i++) {
    if(cognomeCapitalized == listaCognomi[i]){
        console.log(i + 1);
        
    }
}
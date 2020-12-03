// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var studente = {
  name: "gabriele",
  surname: "scodinu",
  age: 24
};

// Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in studente) {
  console.log(studente[key]);
}

// Creare un array di oggetti di studenti.
var classe = [
  {
  name: "gabriele",
  surname: "scodinu",
  age: 24
  },
  {
  name: "mario",
  surname: "rossi",
  age: 25
  },
  {
  name: "michele",
  surname: "bianchi",
  age: 22
  },
]

// Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto
// studente inserendo nell'ordine: nome, cognome e età.
var inserisciNome = prompt("inserisci un nome");
var inserisciCognome = prompt("inserisci un cognome");
var inserisciEtà = prompt("inserisci un'età'");

var nuovoStudente = {};
nuovoStudente.name = inserisciNome;
nuovoStudente.surname = inserisciCognome;
nuovoStudente.age = inserisciEtà;

classe.push(nuovoStudente);

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var key in classe) {
  console.log(classe[key]);
}

/* Scrivi un programma che stampi in console i numeri da 1 a 100.*/

// **MILESTONE 1**
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//   **MILESTONE 2**
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// **MILESTONE 3**

// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.


const container = document.querySelector(".container");

const limit = 100;

for(let i=1; i <= limit; i++){
  const boxx = document.createElement("div");
  boxx.className = "box";
  container.append(boxx)


  if(i % 3 === 0 && i % 5 === 0){
    boxx.innerHTML = 'FizzBuzz';
    boxx.classList.add("fizzandbuzzcolor");

  } else if(i % 5 === 0) {
    boxx.append('Buzz');
    boxx.classList.add("buzzcolor");

  } else if (i % 3 === 0) {
    boxx.append('Fizz');
    boxx.classList.add("fizzcolor");
  }
  else {
    boxx.append(i)
  }
  
}



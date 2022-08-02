/* Scrivi un programma che stampi in console i numeri da 1 a 100.*/


// **MILESTONE 1**
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//   **MILESTONE 2**
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// **MILESTONE 3**

// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.


const container = document.querySelector('.container');

const limit = 100;

for(let i = 1; i <= limit; i++){

  const boxEl = document.createElement("div");
  boxEl.className = "box";
  //con innerHTML potevi appendere anche da qui boxEl.append(i), senza la condizione else


  if(i % 15 === 0){ //!(i % 15)--> potevi scrivere anche così, perchè 0 = false, not ! true = false( 0 )
    boxEl.append('fizzbuzz'); //boxEl.innerHTML = 'fizzbizz'; 
    boxEl.classList.add('fizzandbuzzcolor');
  }else if(i % 3 === 0){
    boxEl.append('fizz');
    boxEl.classList.add('fizzcolor');
  } else if(i % 5 === 0){
    boxEl.append('buzz');
    boxEl.classList.add('buzzcolor');
  }else {
    boxEl.append(i)
  }

  container.append(boxEl);
}
/* Scrivi un programma che stampi in console i numeri da 1 a 100.*/


const container = document.querySelector(".container");

const limit = 100;

for(let i=1; i <= limit; i++){
  const boxx = document.createElement("div");
  boxx.className = "box";
  boxx.append(i)

  // **MILESTONE 1**
  // Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
  // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


  if(i % 3 === 0 && i % 5 === 0){
    boxx.textContent = 'FizzBuzz';
    boxx.classList.add("fizzandbuzzcolor");

  } else if(i % 5 === 0) {
    boxx.textContent = 'Buzz';
    boxx.classList.add("buzzcolor");

  } else if (i % 3 === 0) {
    boxx.textContent = 'Fizz';
    boxx.classList.add("fizzcolor");
  }

  container.append(boxx)

}



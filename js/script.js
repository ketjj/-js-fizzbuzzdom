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
    boxx.textContent = 'FizzBuzz';;

  } else if(i % 5 === 0) {
    boxx.textContent = 'Buzz';

  } else if (i % 3 === 0) {
    boxx.textContent = 'Fizz';;
  }

  container.append(boxx)

}



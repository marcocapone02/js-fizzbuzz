/*

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


1. Creo un ciclo da 1 a 100

2. Prendo i multipli di 5 e di 3 (FizzBuzz)

3. Prendo i multipli di 3 (Fizz)

4. Prendo i multipli di 5 (Buzz)


*/




/*
for(let i = 1; i < 101; i++){
  if(!(i % 15)){
    console.log('FizzBuzz');
  }else if(!(i % 3)){
    console.log('Fizz');
  }else if(!(i % 5)){
    console.log('Buzz');
  }else{
    console.log(i);
  }
}
*/




  const container = document.querySelector('.container');

  for(let i = 1; i <= 100; i++){

    const box = document.createElement('div');
    box.className = 'box';

    let output = i;

    if(!(i % 15)){
      output = 'FizzBuzz';
      box.classList.add('fizzbuzz');
    }else if(!(i % 3)){
      output = 'Fizz';
      box.classList.add('fizz')
    }else if(!(i % 5)){
      output = 'Buzz';
      box.classList.add('buzz');
  }

  box.append(output);

  container.append(box);

}

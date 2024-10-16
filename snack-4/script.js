const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']


//let newArray = [];  //l'output non cambia con o senza newArray perchè in questo esempio non serve

//console.log(posts.map(oggetto=> oggetto.author).join(", ")); //output---> Marco, Luca, Fabrizio, Enrico



let newArray = posts.map(oggetto => oggetto.author);


console.log(newArray.join(", ")); //output-----> Marco, Luca, Fabrizio, Enrico
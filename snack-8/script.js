const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// Questo è il nostro array di studenti
const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];


let classes = [];


for (let i = 0; i < students.length; i++) {
   
    if (students[i].name === 'Marco Lanci') {
        
        classes.push(students[i].class);
    }
}

let marcoClass;


if (classes.length > 0) {
    marcoClass = classes[0]; 
} else {
    marcoClass = null; 
}


console.log(marcoClass); 
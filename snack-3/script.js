const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


//metodoCicloFor:

let newArray  = []

for  ( let i=0; i<numbers.length; i++){
     let number = numbers [i] ;

     
     newArray.push(number + 1);
}

console.log(newArray)

//metodoMap


//const incrementedNumbers = numbers.map(function(num) {
    //return num + 1; 
//});

//console.log(incrementedNumbers);
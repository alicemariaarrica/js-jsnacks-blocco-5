const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

let newArray = []; 

for (let i = 0; i < nums.length; i++) {
    let num = nums[i]; 

   
    if (num % 2 === 0) {
        newArray.push(num); 
    }
}

console.log(newArray); 
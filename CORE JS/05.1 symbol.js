// immutable means unchanged 
// x = 10 then changing it to x = 11 now both have different addresses.
// Mutable dataType - data will be changed in same address. 
// immutable dataType - creates a different object for different values. 
// if value is same then it will give a Reference of that address
//it is stored in heap memory and have constant pools individually.


// ==============================SYMBOL==================================

// symbol is immutable
let x = Symbol('xyz');
let y = Symbol('xyz');

console.log(x);
console.log(x.description);


// Symbols are unique
console.log(x == y); //false 

// Symbols are not included in for...in Loop
let id = Symbol("id");

let person = {
    name: "Jack",
    age: 25,
    [id]: 12
};

for (let key in person) {
    console.log(key);
}

for (let key in person) {
    var z = person[key]
    console.log(z);
}










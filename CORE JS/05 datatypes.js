// Primitive datatypes : null, number, symbol, string, bigint, boolean, undefined

let a = "Tanvi";
let b ='y';
let c = 1;
let d = true;
let e = BigInt(1000);
let f = undefined;
let g = null;

// typeof <identifier> --> to get datatype

console.log(a + " is "+ typeof a);
console.log(b + " is "+ typeof b);
console.log(c + " is "+ typeof c);
console.log(d + " is "+ typeof d);
console.log(e + " is "+ typeof e);
console.log(f + " is "+ typeof f);
console.log(g + " is "+ typeof g);

//Object data type -- non primitive , contains various data types , key:value pair

x = { greetings: 'Namaste' , region : 'india' };
console.log(x) 
console.log(x.greetings)
console.log(x + " is "+ typeof x); 
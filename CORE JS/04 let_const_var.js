
//=================const===============

const name = "TS"
//name = 1 --> error : Assignment to constant variable
console.log(name)

//================let================

let skz = "straykidz"
let svt = "seventeen"
//let svt = "seventeen"  -->  error : let can't be redeclared
{
    let T = "TS"
    let svt = "seventeen idubily" 
    console.log(skz)
    console.log(svt)
}
console.log(skz)
console.log(svt)
// console.log(T) --> error : T is not defined


//===================var=================

var a = 1
var b = 2
var b = 3 // var can be redeclare with same name 
{
    console.log(a)
    console.log(b)
    b = 4 
}
console.log(a)
console.log(b)





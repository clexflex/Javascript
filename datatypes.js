//Primitive Data Types in JS
// nn ss bb u -  Null, Number, String, Symbol, Boolean, BigInt, undefined
let a= null
let b=90
let c="String"
let d=Symbol("Yashraj")
let e=true
let f=BigInt("456")+BigInt("4")
let g=undefined
console.log(a,b,c,d,e,f,g)

//non-premitive data type - object

const object={
    student:"Yashraj",
    student1: 'Yashraj',
    rollnum:45

};
console.log(object);
//two types of accessing particular key pairs
console.log(object.student)
console.log(object["rollnum"])
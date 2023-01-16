//if..
//if ..else..
//if..else if ...else
const prompt=require("prompt-sync")({sigint:true}); 

let a = prompt("Enter your age:")
a=Number.parseInt(a);
if(a >0 && a< 18){
    console.log("You are not adult")
}
else if(a>18){
    console.log("you are adult")
}
else if(a<0){
    console.log("enter valid age")
}
else{
    console.log("Wrong age")
}

/// Ternary operator   ? :

console.log("You can",(a>18 ? "Drive" : "Not Drive"))

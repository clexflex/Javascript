// for loops

//code to add o to n numbers
let sum=0;
const prompt=require("prompt-sync")({sigint:true}); //requred to run on VS code

let n=prompt("Insert a number")
n=Number.parseInt(n);
for(let i=0; i<n; i++){
    sum +=i +1

}
console.log("Addition of 0 to "+n+" Numbers is "+sum)

//Fibonacci
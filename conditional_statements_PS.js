//Problem Set Conditional Statement
const prompt=require("prompt-sync")({sigint:true}); 

let a = prompt("Enter your age:")
a=Number.parseInt(a);
if(a >=10 && a<= 20){
    console.log("Your age lies between 10 and 20")
}
else
{
    console.log("YOur age does not lies between 10 and 20")
}
// Problem : Given a number with a variable name num. Find weather that number is a prime number or not.
// If it is a prime number then print Yes else print No. 


let num = 13; 

let fact = 0; 

for(let i=0; i<=num; i++){
   if(i/num==0){
      fact++; 
   } 
} 

if(fact >= 2){
   console.log("Yes"); 
} 
else{
   console.log("No"); 
} 

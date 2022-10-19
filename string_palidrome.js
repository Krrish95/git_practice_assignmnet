// problem : Given a string with a variable name str. Check weather that is a palindrome or not. 
// If it is a palindrome then print Yes else print No. 


let str = "madam"; 

let revStr = ""; 

for(let i=str.length-1; i>=0; i++){
    revStr = revStr + i; 
} 

if(revStr = str){
   console.log("Yes"); 
} 
else{
   console.log("No"): 
} 

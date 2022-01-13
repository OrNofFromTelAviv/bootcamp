//Exercise 1 : The World Translator
let answer = prompt("what language do you speak?")
let language = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
console.log (language);

switch (language) {
    case "French":
        alert("Bonjour");
        break;

   case "English":
       alert("Hello");  
       break;
       
    case "Hebrew":
        alert("Shalom");
        break;

    default:
        alert("01110011 01101111 01110010 01110010 01111001");
        break;    
}


//Exercise 2 : The Grade Assigner
let grade = prompt("what is your grade?")

switch(true) {

    case grade > 90:
        console.log("A");
        break;
        
    case grade >=80 && grade <=90:
        console.log("B");
        break; 
        
    case grade >=70 && grade <=80:
        console.log("C");
        break;
   
    
    case grade < 70:
        console.log("D");
        break;
         

}


//Exercise 3 : Verbing
let verb = prompt("type a verb")

switch (true) {

    case verb.length >=3 && verb.slice(-3) !="ing":
        console.log (verb.concat("ing"));
        break;

    case verb.length >=3 && verb.slice(-3) =="ing":
        console.log (verb.concat("ly"));
        break;

    case verb.length <3:
        default:
        break;    
}

/*in this exercise there's an issue when the verb ends with a consonant and a vowel.
 in this case we should double the last words, i.e swim should be swimming, shop shoud be shopping etc.
 I wasn't sure how to solve this. so I tried something like this down here but it didn't work- */


let verb = prompt("type a verb")

switch (true)
{
    case verb.length >=3 && verb.slice(-3) !="ing" && verb.slice(-2) == "i":
        console.log (verb.concat(verb.slice(-1)) + ("ing"));
        break;
}


 


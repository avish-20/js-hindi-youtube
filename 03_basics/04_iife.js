// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//semicolon required otherwise other function will not execute

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
// sometimes global scope create polution, to avoid this ifffi is used or when we required to connect to database when file is opened automaatically



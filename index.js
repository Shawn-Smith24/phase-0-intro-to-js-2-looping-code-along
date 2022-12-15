// Code your solutions in this file
const names =['Guadalupe', 'Ollie', 'Aki'];
function writeCards(names){
    const greetings = [];
    for (let i = 0; i < names.length; i++){
        greetings.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    };
    return greetings
};
writeCards();


function countDown(number = 25){
    while(number >= 0){
    console.log(number--)};
};
countDown();

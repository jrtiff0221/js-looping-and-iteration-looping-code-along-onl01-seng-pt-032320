// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];


function writeCards(names, event) {
    let array = []; 
    for (let i = 0; i < names.length; i++) {
       array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    } 
    return array; 

}

writeCards(names, "surprise");

// function writeCards(names, giftType) {
    //  return names.map(name => `Thank you, ${name}, for the wonderful ${giftType} gift!`);
//  }

function countDown(n) {
    let countdown = n;
    while (countdown >= 0) {
        console.log(countdown--); 
    }

}
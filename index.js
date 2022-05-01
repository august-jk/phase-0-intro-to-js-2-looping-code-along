// Code your solutions in this file

const names = ['Guadalupe', 'Ollie', 'Aki'];
const event = 'surprise'
function writeCards(names, event) {
    let messages = [];
  for (let i = 0; i < names.length; i++) {
   messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    console.log(messages);
    return messages;
}

writeCards();

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
    return num;
}
countDown();

//////
//Object Destructuring
/////

// const person = {
//   name: "Masato",
//   age: 32,
//   location: {
//     city: 'Sunnyvale',
//     temp: 70
//   }
// };


// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); //if no name, default to sefl-published

///////
//Array Destructuring
/////// 

// const address = ['123 Abc Lane', 'Sunnyvale', 'California', '12345'];
// const [, city, state = 'Oregon'] = address;
// console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)
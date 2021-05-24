let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split()); // turns it into an array
console.log(str.split('e')); // splits the string using e as a dilamete
console.log(str.split(' ')); // splits by the space.
console.log(str.split('')); // splits every single chracter up.
// What is the purpose of the parameter inside the ()? it is to define what you split the string up by

//b) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join()); // joins the array as is with commas inbetween
console.log(arr.join('a')); // joins the array with an a separated between each element
console.log(arr.join(' ')); // joins the array with spaces inbetween
console.log(arr.join('')); // joins the arry with no spaces

//c) Do split or join change the original string/array?

// i dont think so

//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));
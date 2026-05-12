// -> immutable      -> "" - '' - ``

// immutable -> cannot be changed


var user = "John Doe";
console.log(user);
// var user = "Jane ";
console.log(user);

console.log(user[0]);

user[0] = "M";
console.log(user);


// string functions

console.log(user.length);   // length is a property
console.log(user.toUpperCase());  // toUpperCase is a function
console.log(user.toLowerCase()); 

// unicode characters
// A  => 65
// a  => 97


// console.log("Unicode " + user.charCodeAt(65));
console.log("Unicode " + String.fromCharCode(65));
console.log("Unicode " + String.fromCharCode(97));
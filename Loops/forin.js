// let obj = {name: "Kavyan", age: 22}

// for(let i in obj){
//     console.log(i, obj[i]);
// }



// =============== Task =================


let obj = {
    a: 10,
    b: 20,
    c: 30
};


let count = 0;

for(let i in obj){
    count++;
}

console.log("Total properties:", count);
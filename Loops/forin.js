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



// ============== Task 3 =================

let Number = {
    a: 10,
    b: 20,
    c: 30
};


let max = -Infinity;

for(let i in Number){
    if(Number[i] > max){
        max = Number[i];
    }
}

console.log("Maximum value:", max);
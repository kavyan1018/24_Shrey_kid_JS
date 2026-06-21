let students = [
    { name: "Raj", marks: 80 },
    { name: "Amit", marks: 95 },
    { name: "Neha", marks: 85 },
    { name: "Rudra", marks: 98 },
    { name: "Priya", marks: 75 }
];

let topper = students[0];


for(let i = 1; i < students.length; i++){

    if(students[i].marks > topper.marks){

        topper = students[i];
    }
}

console.log("Topper is :", topper.name);
console.log("Marks :", topper.marks);
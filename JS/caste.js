// Find Scholarship

let caste = prompt("Enter your caste (o, b, s, t): ");
let fees = parseFloat(prompt("Enter your Fees: "));
let cgpa = parseFloat(prompt("Enter your CGPA: "));

let grade;
let sh = 0;

if (cgpa > 9) {
    grade = 'A';
} else if (cgpa > 8.5){
    grade = 'B';
} else if (cgpa > 8){
    grade = 'C';
} else if(cgpa > 7.5){
    grade = 'D';
} else {
    console.log("Low CGPA");
}

if(grade == 'A' || grade == 'B' ){
    if(caste == 'o' || caste == 'O'){
        sh = 0;
    } else if (caste == 'b' || caste == 'B'){
        sh = fees * 0.25;
    } else if (caste == 's' || caste == 'S'){
        sh = fees * 0.50;
    } else if (caste == 't' || caste == 'T'){
        sh = fees * 1;
    }
} else {
    console.log("You're grade is low");
}

console.log("Scholarship =", sh);



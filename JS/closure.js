// Closure
// A closure in JavaScript is a function that retains access to variables from its outer scope even after the outer function has finished executing.
// JavaScript mein, closure ek function hai jo apne outer scope se aaye variables tak ka access rakhta hai, aur yeh access outer function ke execution khatam ho jane ke baad bhi bana rahta hai.
function outerFunction() {
    let outerVariable = "I am from the outer function";
    
    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

let closureExample = outerFunction();
closureExample(); // Outputs: "I am from the outer function"

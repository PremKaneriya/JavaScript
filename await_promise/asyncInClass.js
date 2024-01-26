// Synchronous 

// const first = () => {
//     console.log('First');
// }
// const second = () => {
//     console.log('second');
// }
// const Third = () => {
//     console.log('Third');
// }

// first()
// second()
// Third()

// -------------------output----------------------

// first
// second
// Third


// Synchronous problem

// const first = () => {
//     console.log('First');
// }
// const second = () => {

//     const d = new Date();

//     while (new Date - d < 2000 ) {

//     }

//     console.log('second');
// }
// const Third = () => {
//     console.log('Third');
// }

// first()
// second()
// Third()

// -------------------output----------------------

// first
// second (wait 2s)
// Third


// CallBack Function

const printer = (display) => {
    console.log(display);
}

const add = (a, b, callback) => {
    const c = a + b;
    callback(c)
}

add(2, 4, printer)
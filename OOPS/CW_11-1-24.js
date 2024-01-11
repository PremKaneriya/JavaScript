// Abstraction

// class Shape {
//     constructor () {

//     }

//     getArea() {
//         throw new Error('Mai Nahi Jaane Dunga');
//     }
// }

// class Circle extends Shape {
//     radius;

//     constructor(r) {
//         super();
//         this.radius = r;
//     }

//     getArea() {
//         console.log('Area of Circle : ', 3.14 * (this.radius * this.radius));
//     }
// }

// class Rectangle extends Shape {
//     length;
//     width;

//     constructor(l, w) {
//         super();
//         this.length = l;
//         this.width = w;
//     }

//     getArea() {
//         console.log('Area of Square : ', this.length * this.width);
//     }
// }

// const circ = new Circle(2.12);
// circ.getArea();

// const rec = new Rectangle(12,24);
// rec.getArea();



// ------- PolyMorphism -----------

class Animal {
    barks() {
        console.log('General Voice');
    }
}

class Dog extends Animal {
    barks() {
        console.log('Dog Bhoo Bhoo');
    }
}

class Cat extends Animal {
    barks() {
        console.log('Cat Meow Meow');
    }
}

function abstract (animal) {
    animal.barks()
}

const dog = new Dog();
const cat = new Cat();

abstract(dog);
abstract(cat);
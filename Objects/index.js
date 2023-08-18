console.log("Let's start");

//object create

// const rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//                      FACTORY FUNCTION
// function createRectangle(len, bre){
//     return rectangle = {
//         length: len,
//         breadth: bre,
    
//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     };
// }

// let rectangleObj1 = createRectangle(5,4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

// rectangle.length
// rectangle.breadth
// rectangle.draw()

//Camelcase -> numberOfStudents


//                  CONSTRUCTOR FUNCTION -> Pascal Notation
//Pascal Notation -> first letter of every word is capital -> NumberOfStudents
//constructor function -> properties/methods -> intialize or define
function Rectangle(len, bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing');
    }
}

//object creation using constructor function
let rectangleObject = new Rectangle(4, 6);

//          Dynamic nature of objects

rectangleObject.color = 'Crimson-red';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);



//      in-built constructor

let Rectangle1 = new Function(
    'length', 'breadth', 
    `this.length = length;
    this.breadth = breadth;
    this.draw = function() {
        console.log('drawing');
    }`
);
//object creation using Rectangle1
let rect = new Rectangle1(2,3);
console.log(rect);



//      difference between primitive and reference type

//primitive type
console.log('primitive type');
let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);


//reference type
console.log('reference type');
let x = {value:10};
let y = x;
x.value++;
console.log(x.value);
console.log(y.value);


//          iteration through objects

let rectangle = {
    length: 2,
    breadth: 4
};

//      For-in loop
// for(let key in rectangle){
//     //keys are reflected through key variables
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//      For-of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }


if('color' in rectangle){
    console.log('Present');
}
else{
    console.log('Absent');
}


//              Object Cloning

//      Iteration
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);
// src.a++;
// console.log(dest);


//      Assign
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };

// let src2 = { value: 25 };
// let dest = Object.assign({}, src, src2);
// console.log(dest);
// src.a++;
// console.log(dest);

//      Spread
let src = {
    a: 10,
    b: 20,
    c: 30
};

let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);


//primitive string
let lastName = 'Asnani';
//object string
let firstName = new String('Anisha');
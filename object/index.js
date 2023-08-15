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



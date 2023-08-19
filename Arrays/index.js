/*
let numbers = [1,3,5,7];
console.log(numbers);

//          Accessing elements from an array
console.log(numbers[1]);


//          Insertion in an array
//At the End -> push method
numbers.push(9);
console.log(numbers);
//In the beginning -> unshift method
numbers.unshift(8);
console.log(numbers);
//In the Middle -> splice method
numbers.splice(2,0,'a', 'b', 'c', 'd');
console.log(numbers);


//                  Searching in an array
//          Primtive type array
console.log(numbers);
console.log('What is the index of the 7: ' + numbers.indexOf(7));
console.log('What is the index of the 2: ' + numbers.indexOf(2));
//if we want to check if a number exist in an array
//Method-1
if(numbers.indexOf(5) != -1){
    console.log('Present');
}else{
    console.log('Absent');
}
//Method-2
console.log('Does this array contains 7 or not?: ' + numbers.includes(7));
//Method-3
console.log(numbers.indexOf(1, 2));

//          References type array
let courses = [
    {no:1, firstname:'Ritik'},
    {no:2, firstname:'Anisha'}
];
console.log(courses);

//Method-1
let course1 = courses.find(function(course){
    return course.firstname == 'Anisha';
});
console.log(course1);
//Method-2
let course2 = courses.find(cname => cname.firstname == 'Ritik');
console.log(course2);

//                  Removing Element from an array
let num = [1,2,3,4,5,6,7];
console.log(num);
//From the End -> pop method
num.pop();
console.log(num);
//From the beginning -> shift method
num.shift();
console.log(num);
//From the Middle -> splice method
num.splice(2,1);
console.log(num);

//                  Emptying an Array
let numbers = [1,2,3,4,5];
let number2 = numbers;

//numbers = []; // it'll only empty the numbers array, it'll not empty the number2 array
//Method-1
numbers.length = 0;
// Method-2
numbers.splice(0,numbers.length);

console.log(numbers);
console.log(number2);
*/

//                  Combining and Slicing Arrays
let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);
console.log(combined);

let sliced = combined.slice(2,3);
console.log(sliced);

let courses = [
    {no:8, firstname:'Ritik'},
    {no:26, firstname:'Anisha'}
];
let course2 = [
    {no:15, firstname:'Sahisha'},
    {no:5, firstname:'yeahhh'}
];
let objCombined = courses.concat(course2);
console.log(objCombined);

let objSliced = objCombined.slice(3);
console.log(objSliced);
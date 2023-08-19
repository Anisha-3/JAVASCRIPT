//                          Primtive type array
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


//          Searching in an array
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
*/


//                          References type array

let courses = [
    {no:1, firstname:'Anisha'},
    {no:2, firstname:'Ritik'}
];
console.log(courses);

console.log(courses.indexOf({no:1, firstname:'Anisha'}));
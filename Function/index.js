/*
//function call or invoke
run();      //hoisting

//function declaration
function run(){
    console.log('running');
}

//Named function assignment
let stand = function walk(){
    console.log('walking');
}

stand(); //hoisting doesn't work
//walk() will give an error

let jump = stand;
jump();

//Anonymous function assignment
let stand2 = function(){
    console.log('walking');
}
stand2();


//      Functions are dynamic in js
function sum(a, b){
    console.log(arguments);         // it'll create an object
    return a + b;
}
// console.log(sum(1,2));      //3
// console.log(sum(1));      //NaN (Not a Number)
// console.log(sum());      //NaN (Not a Number)
// console.log(sum(1,2,3,4,5));      //3
sum(1,2,3,4,5,6);

function add(){
    let total = 0;
    for(let val of arguments){
        total += val;
    }
    return total;
}
let ans = add(1,2,3,4,5,6,7,8,9,10);
console.log(ans);


//      Rest Operator (gets stored in the array)(it is a last formal parameter)
function sum1(num, value, ...args){  
    console.log(args);
}

sum1(1,2,3,4,5,6);
*/

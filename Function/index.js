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


//      Rest Parameters/Operator (gets stored in the array)(it is a last formal parameter)
function sum1(num, value, ...args){  
    console.log(args);
}

sum1(1,2,3,4,5,6);


//              Default Parameters
function interest(p, r = 6, y = 10){
    return p*r*y/100;
}

console.log(interest(1000,8));


//              GETTER SETTER
//getter -> access properties
//setter -> change or mutate properties

let person = {
    fname: 'Anisha',
    lname: 'Asnani',
    get fullName() {
        return `${person.fname} ${person.lname}`;
    },
    set fullName(value) {
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
};
//Calling getter
console.log(person.fullName);
//Calling setter
person.fullName = 'Sahil Bisht'
console.log(person.fullName);
*/

//              try-catch block

let person = {
    fname: 'Anisha',
    lname: 'Asnani',
    get fullName() {
        return `${person.fname} ${person.lname}`;
    },
    set fullName(value) {
        if(typeof value != String){
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
};
try{
    person.fullName = true;
}
catch(e){
    alert(e);
}

console.log(person.fullName);

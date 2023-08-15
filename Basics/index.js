// line below is used to print on the console below
console.log('Namaste Duniya version 2');

let a = true;
console.log(a);

const number = 12;
//number = 13;


//          Dynamically Typed

let lastName = 'Anisha';
console.log(lastName);

lastName = 3;
console.log(lastName);


//          if-elseif-else statements

let marks = 12;
if(marks >= 90) {
    console.log('A');
}
else if(marks >= 80) {
    console.log('B');
}
else if(marks >=70) {
    console.log('C');
}
else if(marks >= 60) {
    console.log('D');
}
else {
    console.log('E');
}


//          switch statements

let num = 1;
switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('D');
}

//          for loop

console.log("For Loop");
for(let i = 1; i<=5; i=i+1) {
    console.log("Hello " + i);
}

//          while loop

console.log("While Loop");
let x = 1;
while(x <= 5) {
    console.log(x);
    x++;
}

//          do-while loop

console.log("Do-While Loop");
let y = 1;
do {
    console.log(y);
    y++;
} while(y < 10);


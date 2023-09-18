//              ADDING AND REMOVING EVENTLISTENER
/*
document.addEventListener('click', function(){
    console.log('I have clicked on the document');
});
//this doesn't work coz both the functions are different as functions are objects therefore they have different memory location for both the functions therefor the below removeEventListener will not work
document.removeEventListener('click', function(){
    console.log('I have clicked on the document');
});
*/
/*
function eventFunction(){
    console.log('I have clicked on the document');
}

document.addEventListener('click', eventFunction);

document.removeEventListener('click', eventFunction);
*/

/*
//          EVENT OBJECT

const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event){
    console.log(event);
});


let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event){
    event.preventDefault();
    console.log('maza aaya, aacha laga')
});
*/


/*
//          Avoid too many events

const t1 = performance.now();
for(let i = 0; i <= 100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took: " + (t2-t1) + "ms");


//optimizing a bit
const t3 = performance.now();
let myDiv = document.createElement('div');

function paraStatus(event) {
    console.log('Para ' + event.target.textContent);
}

myDiv.addEventListener('click', paraStatus);

for(let i = 0; i <= 100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

const t4 = performance.now();
console.log("This took: " + (t4-t3) + "ms");

//              Document Fragment

// most optimised code
let fragment = document.createDocumentFragment();
for(let i = 0; i <= 100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);    // 1 Reflow and 1 Repaint
*/

/*
let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN'){
        console.log('clicked on the span tag ' + event.target.textContent);
    }
});

function addPara(){
    let para = document.createElement('p');
    para.textContent = "Js is Single Threaded";
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para = document.createElement('p');
    para.textContent = "kya haal chal";
    document.body.appendChild(para);
}

addPara();
appendNewMessage();


let meraPromise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('I am inside promise1');
    },5000);
    //resolve(2004);
    reject(new Error('Bhaisahab Error aaye hai'));
});

meraPromise1.then((value) => {console.log(value)}, (error) => {console.log("Recieved an Error")});

meraPromise1.catch((error) => {console.log("Recieved an Error")});


let meraPromise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('I am inside promise2');
    },3000);
    // resolve(2004);
    // reject(new Error('Bhaisahab Error aaye hai'));
});
console.log('first');
*/

// async function abcd(){
//     return "async function always returns a promise.";
// }
// console.log(abcd());

// async function utility() {

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Delhi me bhot garmi hai");
//         }, 5000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hyderabad is cool");
//         }, 6000);
//     });

//     let dM = await delhiMausam;
//     let hM = await hydMausam;

//     return [dM, hM];
// }


/*
//                        FETCH API(application programable interface)

//      get fetch api
async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let output = await content.json();
    console.log(output);
}
utility();

//      set  fetch api
async function helper() {
    let options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = content.json();
    return response;

}
async function utility() {
    let ans = await helper();
    console.log(ans);
}
utility();
*/

//  NESTED FUNCTIONS -> CLOSURE -> REFERENCES
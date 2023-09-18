const countValue = document.querySelector('#counter');

function increment() {
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value++;
    //set the value onto UI
    countValue.innerText = value;
};

function decrement() {
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value--;
    //set the value onto UI
    countValue.innerText = value;    
};
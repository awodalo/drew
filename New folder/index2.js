


document.getElementById(`mysubmit`).onclick = function(){
    username =  document.getElementById('mytext').value;
        console.log(username);
}
  

const myDecrease = document.getElementById("myDecrease");
const myIncrease = document.getElementById("myIncrease");
const myReset = document.getElementById("myReset");
const myLabel = document.getElementById("myLabel");
let count = 0;

myIncrease.onclick = function(){
    count++;
    myLabel.textContent = count;
}

myDecrease.onclick = function(){
    count--;
    myLabel.textContent = count;
}


myReset.onclick = function(){
    count = 0;
    myLabel.textContent = count;
}
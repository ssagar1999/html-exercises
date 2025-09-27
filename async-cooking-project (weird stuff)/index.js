let breakfast = {
  chai: null,
  paratha: null,
  alooBoiled: null,
  alooMashed:null,
  tavaIsHot: false,
  stuffAlooinParantah: null
};

let chai = document.getElementById('chai');
let paratha = document.getElementById('paratha');
let aloo = document.getElementById('aloo');
let tavaIsHot = document.getElementById('tavaIsHot');
let imgGif =  document.getElementById('imgGif');
// imgGif.style.display = 'block';
let btn = document.getElementById('start-button');
btn.addEventListener('click', makeBreakfast);

function makeBreakfast(){
    imgGif.style.display = 'block';

//now  steps to make breakfast

makeChai();
heatTava();
makeParantha();
boilAloo();
mashAloo();
stuffAlooinParantah();
   imgGif.style.display = 'none';

}

//lets's start writing functions
function makeChai(){
    console.log('satrating to make chai');
    waitingTime('making chai',7);
    breakfast.chai = 'chai is ready';
    chai.textContent = breakfast.chai;
}

function makeParantha(){
    if(breakfast.tavaIsHot === false){
 throw new Error('tava is not hot yet');
    }
    console.log('parantha making started');
    waitingTime('making parantha',10);
    breakfast.paratha = 'parantha is ready';
    paratha.textContent = breakfast.paratha;

}
function boilAloo(){
    console.log('boiling aloo started');
    waitingTime('boiling aloo',5);
    breakfast.alooBoiled = 'aloo is boiled';
    aloo.textContent = breakfast.alooBoiled;
}
function mashAloo(){
    console.log('mashing aloo started');
    if(breakfast.alooBoiled === null){
        throw new Error('aloo is not boiled yet');
    }
    waitingTime('mashing aloo',5);
    breakfast.alooMashed = 'aloo is mashed';
    aloo.textContent = breakfast.alooMashed;
}
function heatTava(){
    console.log('heating tava started');
    waitingTime('heating tava',5);
    breakfast.tavaIsHot = true;
    tavaIsHot.textContent = breakfast.tavaIsHot;
}
function stuffAlooinParantah(){
    console.log('stuffing aloo in parantha started');
    if(breakfast.alooMashed === null || breakfast.paratha === null){
        throw new Error('either aloo is not mashed or tava is not hot or paratha is not ready');
    }
    
    waitingTime('stuffing aloo in parantha',5);
    breakfast.stuffAlooinParantah = 'aloo stuff in parantha';
    aloo.textContent = breakfast.stuffAlooinParantah;
}












function waitingTime(task, time){
    let startTime = Date.now();
    while(Date.now() < startTime + time*1000){
        continue;

    }
    console.log(`${task} is done in ${Date.now() - startTime + time*1000}seconds`);
}
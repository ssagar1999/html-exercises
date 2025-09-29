let breakfast = {
    chai: null,
    paratha: null,
    alooBoiled: null,
    alooMashed: null,
    tavaIsHot: false,
    stuffAlooinParantah: null
};

// let chai = document.getElementById('chai');
// let paratha = document.getElementById('paratha');
// let aloo = document.getElementById('aloo');
// let tavaIsHot = document.getElementById('tavaIsHot');
// let imgGif = document.getElementById('imgGif');
// // imgGif.style.display = 'block';
// let btn = document.getElementById('start-button');
// btn.addEventListener('click', makeBreakfast);

function makeBreakfast() {
    // imgGif.style.display = 'block';

    //now  steps to make breakfast

    makeChai().then(() => {
       console.log('chai is ready');
    })
    heatTava()
}
//lets's start writing functions
function makeChai() {
   return new Promise((res, rej) =>{
     console.log('satrating to make chai');
    waitingTime('making chai', 7, fn);
    breakfast.chai = 'chai is ready';

    // chai.textContent = breakfast.chai;

   })
}

function makeParantha() {
  let fn =()=>{
      if (breakfast.tavaIsHot === false) {
        throw new Error('tava is not hot yet');
    }
    console.log('parantha making started');
    breakfast.paratha = 'parantha is ready';
    // paratha.textContent = breakfast.paratha;
  }
   return  waitingTime('making parantha', 10, fn);

}
function boilAloo() {
 let fn = ()=>{
       console.log('boiling aloo started');
    breakfast.alooBoiled = 'aloo is boiled';
    // aloo.textContent = breakfast.alooBoiled;
 }
    return waitingTime('boiling aloo', 5, fn);
}
function mashAloo() {
  let fn =()=>{
      console.log('mashing aloo started');
    if (breakfast.alooBoiled === null) {
        throw new Error('aloo is not boiled yet');
    }
    breakfast.alooMashed = 'aloo is mashed';
    // aloo.textContent = breakfast.alooMashed;
  }
    return waitingTime('mashing aloo', 5, fn);
}
function heatTava() {
let fn =()=>{
        console.log('heating tava started');
    breakfast.tavaIsHot = true;
    // tavaIsHot.textContent = breakfast.tavaIsHot;
}
    return waitingTime('heating tava', 5, fn);
}
  function stuffAlooinParantah() {
 let fn=()=>{
       console.log('stuffing aloo in parantha started');
    if (breakfast.alooMashed === null || breakfast.paratha === null) {
        throw new Error('either aloo is not mashed or tava is not hot or paratha is not ready');
    }

    breakfast.stuffAlooinParantah = 'aloo stuff in parantha';
    // aloo.textContent = breakfast.stuffAlooinParantah;
 }
    return waitingTime('stuffing aloo in parantha', 5, fn);
}



function waitingTime(task, time, fn) {
    return new Promise((res, rej) => {
            setTimeout(() => {
        console.log(`${task} is done in ${time}seconds`);
        fn();
        res('done');
    }, time * 1000);

    })


}


// let c = makeParantha();
// console.log(c); // Promise { <pending> }
heatTava()
.then(()=>{
    return makeParantha();
}).then(()=>{
    return boilAloo();
}).then(()=>{
    return mashAloo();
}).then(()=>{
    return stuffAlooinParantah();
}).then(()=>{
    console.log('breakfast is ready');
    // imgGif.style.display = 'none';
})



// @https://slasscom.github.io/slasscom-bootcamp-curriculum/web-application-development/ 
//  is the ui inspiration i kind of like this ui see if yu can corporat this
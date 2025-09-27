let breakfast = {
    chai: null,
    paratha: null,
    alooBoiled: null,
    alooMashed: null,
    tavaIsHot: false,
    stuffAlooinParantah: null
};

let chai = document.getElementById('chai');
let paratha = document.getElementById('paratha');
let aloo = document.getElementById('aloo');
let tavaIsHot = document.getElementById('tavaIsHot');
let imgGif = document.getElementById('imgGif');
// imgGif.style.display = 'block';
let btn = document.getElementById('start-button');
btn.addEventListener('click', makeBreakfast);

function makeBreakfast() {
    imgGif.style.display = 'block';

    //now  steps to make breakfast

    makeChai();
    heatTava(() => {
        makeParantha(() => {
            boilAloo(() => {
                mashAloo(() => {
                    stuffAlooinParantah(() => {
                        imgGif.style.display = 'none';
                    });
                });
            });
        });
    });
}

//lets's start writing functions
function makeChai(fn) {
    console.log('satrating to make chai');
    waitingTime('making chai', 7, fn);
    breakfast.chai = 'chai is ready';

    chai.textContent = breakfast.chai;
}

function makeParantha(fn) {
    if (breakfast.tavaIsHot === false) {
        throw new Error('tava is not hot yet');
    }
    console.log('parantha making started');
    waitingTime('making parantha', 10, fn);
    breakfast.paratha = 'parantha is ready';
    paratha.textContent = breakfast.paratha;

}
function boilAloo(fn) {
    console.log('boiling aloo started');
    waitingTime('boiling aloo', 5, fn);
    breakfast.alooBoiled = 'aloo is boiled';
    aloo.textContent = breakfast.alooBoiled;
}
function mashAloo(fn) {
    console.log('mashing aloo started');
    if (breakfast.alooBoiled === null) {
        throw new Error('aloo is not boiled yet');
    }
    waitingTime('mashing aloo', 5, fn);
    breakfast.alooMashed = 'aloo is mashed';
    aloo.textContent = breakfast.alooMashed;
}
function heatTava(fn) {
    console.log('heating tava started');
    waitingTime('heating tava', 5, fn);
    breakfast.tavaIsHot = true;
    tavaIsHot.textContent = breakfast.tavaIsHot;
}
function stuffAlooinParantah(fn) {
    console.log('stuffing aloo in parantha started');
    if (breakfast.alooMashed === null || breakfast.paratha === null) {
        throw new Error('either aloo is not mashed or tava is not hot or paratha is not ready');
    }

    waitingTime('stuffing aloo in parantha', 5, fn);
    breakfast.stuffAlooinParantah = 'aloo stuff in parantha';
    aloo.textContent = breakfast.stuffAlooinParantah;
}



function waitingTime(task, time, fn) {
    setTimeout(() => {
        console.log(`${task} is done in ${time}seconds`);
        fn && fn();
    }, time * 1000);

}
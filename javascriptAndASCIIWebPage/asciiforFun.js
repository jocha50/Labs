

let timer = null;
let i = 0;
let speed = 250;
window.onload = function () {
    const startButton = document.getElementById('start');
    startButton.onclick = startMethod;



    const stopButton = document.getElementById('stop');
    stopButton.onclick = stopMethod;

    const fontOption = document.getElementById('textAreaFont');
    fontOption.onchange = changeFont;

/*
     const animationChoice = document.getElementById('animateLists');
     animationChoice.onchange = populateTextArea;*/
}

function turbo() {
    console.log(document.getElementById('checkBox').checked);
    if (document.getElementById('checkBox').checked) {
        console.log("speed 50");
        return speed = 50;
    }
    else {
        console.log("speed 250");

        return speed = 250;
    }

}

function stopMethod() {


    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
    document.getElementById('animateLists').disabled = false;

    clearInterval(timer);
    timer = null;

}
function convertIntoArray(tempTextAreaValue) {

    let results = [];
    let i = 0;

    while (i < tempTextAreaValue.length) {
        tempTextAreaValue = tempTextAreaValue.substring(i);
        let index = tempTextAreaValue.indexOf('=====\n');

        if (index == -1) {
            results.push(tempTextAreaValue.substring(0));
            break;
        }
        results.push(tempTextAreaValue.substring(0, index));
        i = index + 5;
    }
    /* for(let i =0 ;i < results.length;i++){
         console.log(results[i]);
     }*/
    // document.getElementById('textArea').value = results[0];

    return results;




}

function startMethod() {

    let frames = chooseAnimation();
    if (timer === null) {
        document.getElementById('stop').disabled = false;
        document.getElementById('start').disabled = true;
        document.getElementById('animateLists').disabled = true;
        timer = setInterval(() => {
            document.getElementById('textArea').value = frames[i++];
            if (i == frames.length) {
                i = 0;
            }

            //changes timer interval dynamically
            if (document.getElementById('checkBox').checked) {
                speed = 50;
                clearInterval(timer);
                timer = null;
                startMethod();
            }
            else {
                speed = 250;
                clearInterval(timer);
                timer = null;
                startMethod();
            }

        }, speed);
    }

}

function changeFont() {
    const selectedElement = document.getElementById('textAreaFont');
    const textAreaFont = document.getElementById('textArea');
    if (selectedElement.value === "TINY") {
        textAreaFont.style.fontSize = "7pt";
    }
    else if (selectedElement.value === "SMALL") {
        textAreaFont.style.fontSize = "10pt";
    }
    else if (selectedElement.value === "MEDIUM") {
        textAreaFont.style.fontSize = "12pt";
    }
    else if (selectedElement.value === "LARGE") {
        textAreaFont.style.fontSize = "16pt";
    }
    else if (selectedElement.value === "EXTRA_LARGE") {
        textAreaFont.style.fontSize = "24pt";
    }
    else if (selectedElement.value === "XXL") {
        textAreaFont.style.fontSize = "32pt";
    }
}

function animationValues(animationChoiceValue) {

    if (animationChoiceValue === 'BLANK') {
        return ANIMATIONS['blank'].blank;
    }
    else if (animationChoiceValue === 'EXERCISE') {
        return ANIMATIONS['exercise'].exercise;
    }
    else if (animationChoiceValue === 'JUGGLER') {
        return ANIMATIONS['juggler'];
    }
    else if (animationChoiceValue === 'BIKE') {
        return ANIMATIONS['bike'].bike;
    }
    else if (animationChoiceValue === 'DIVE') {
        return ANIMATIONS['dive'].dive;
    }
    else if (animationChoiceValue === 'CUSTOM') {
        return ANIMATIONS['custom'].custom;
    }

}


function chooseAnimation() {
    const animationChoiceValue = document.getElementById('animateLists').value;

    if (animationChoiceValue === 'BLANK') {
        document.getElementById('textArea').value = '';
        return convertIntoArray(ANIMATIONS['blank']);
    }
    else if (animationChoiceValue === 'EXERCISE') {
        return convertIntoArray(ANIMATIONS['exercise']);
    }
    else if (animationChoiceValue === 'JUGGLER') {
        return convertIntoArray(ANIMATIONS['juggler']);
    }
    else if (animationChoiceValue === 'BIKE') {
        return convertIntoArray(ANIMATIONS['bike']);
    }
    else if (animationChoiceValue === 'DIVE') {
        return convertIntoArray(ANIMATIONS['dive']);
    }
    else if (animationChoiceValue === 'CUSTOM') {
        return convertIntoArray(ANIMATIONS['custom']);
    }

}

function populateTextArea() {
    const animationChoiceValue = document.getElementById('animateLists').value;

    if (animationChoiceValue === 'BLANK') {
        document.getElementById('textArea').value = ANIMATIONS['blank'];
    }
    else if (animationChoiceValue === 'EXERCISE') {
        document.getElementById('textArea').value = ANIMATIONS['exercise'];
    }
    else if (animationChoiceValue === 'JUGGLER') {
        document.getElementById('textArea').value = ANIMATIONS['juggler'];
    }
    else if (animationChoiceValue === 'BIKE') {
        document.getElementById('textArea').value = ANIMATIONS['bike'];
    }
    else if (animationChoiceValue === 'DIVE') {
        document.getElementById('textArea').value = ANIMATIONS['dive'];
    }
    else if (animationChoiceValue === 'CUSTOM') {
        document.getElementById('textArea').value = ANIMATIONS['custom'];
    }

}
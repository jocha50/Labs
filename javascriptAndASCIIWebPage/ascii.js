

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

    return results;




}

function startMethod() {

    let frames = chooseAnimation();
    if (frames === 0) {
        document.getElementById('textArea').value = " No input to Animate, Please select one of the animation\n from the Animation list.";
        document.getElementById('textArea').style.color = "red";


    }
    else {
        document.getElementById('textArea').style.color = "black";
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

function chooseAnimation() {
    const animationChoiceValue = document.getElementById('animateLists').value;
    if (animationChoiceValue === 'BLANK') {
        return 0;
    }
    return convertIntoArray(ANIMATIONS[animationChoiceValue]);

}

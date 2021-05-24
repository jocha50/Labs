/*window.onload = function(){
    const decoration = document.getElementById('biggerDecoration');
    decoration.onclick = helloWorld;
}*/

let timer = null;

window.onload = function () {
    const decoration = document.getElementById('biggerDecoration');
    decoration.onclick = largerWithTimer;
}

function largerWithTimer() {
    if (timer === null) {
        timer = setInterval(largerSize, 500);
    }
    else {
        clearInterval(timer);
        timer = null;
    }
}

function largerSize() {
    const styleSampleText = document.getElementById('sampleText');
    const fSize = parseInt(getComputedStyle(styleSampleText, null).fontSize) * 72 / 96; //since getComputedStyle.fontsize returns in Px it must be converted to pt by using (1px = 72/96 pt)
    const updatedFsize = fSize + 2 + "pt";
    document.getElementById('sampleText').style.fontSize = updatedFsize;
}



const checkbox = document.getElementById('bling');
checkbox.addEventListener('change', checkBoxChanged);

function checkBoxChanged() {
    if (document.getElementById('bling').checked) {

        const elem = document.getElementById('sampleText');
        elem.style.fontWeight = "bold";
        elem.style.textDecoration = "underline";
        elem.style.color = "green";
        document.body.style.backgroundImage = "url(../Images/background.png)";
        /* if(!document.getElementById('sampleText').className){
             document.getElementById('sampleText').className = 'decorateTextArea';
         }*/
    }
    else {
        const elem = document.getElementById('sampleText');
        elem.style.fontWeight = "normal";
        elem.style.textDecoration = "none";
        elem.style.color = "black";
        document.body.style.backgroundImage = "none";
    }
}




function helloWorld() {
    alert("Hello World!");
}



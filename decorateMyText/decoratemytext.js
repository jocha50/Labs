/*window.onload = function(){
    const decoration = document.getElementById('biggerDecoration');
    decoration.onclick = helloWorld;
}*/

let timer = null;
let i=0;

window.onload = function () {
    const decoration = document.getElementById('biggerDecoration');
    decoration.onclick = largerWithTimer;
}

function largerWithTimer(){
    if (timer === null){
        timer = setInterval(largerSize,500);
    }
    else{
        clearInterval(timer);
        timer = null;
    }
}

function largerSize() {
    document.getElementById('sampleText').style.fontSize = "24pt";
    const fsize = parseInt(document.getElementById('sampleText').style.fontSize) + 10 + "pt";
  //  alert(fsize);
    //document.getElementById('sampleText').style.fontSize = fsize;
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



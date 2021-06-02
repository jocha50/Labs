


init = function () {
    var puzzleArea = $('#puzzlearea');
    var divs = $('#puzzlearea div');

    $('#puzzlearea div').each(function (i) {
        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        // set basic style and background
        $(this).addClass("puzzlepiece");
        $(this).css({
            "left": x + "px", "top": y + "px", "backgroundImage": 'url("../Images/15PuzzleBackground.jpg")',
            "backgroundPosition": -x + 'px ' + (-y) + 'px'
        });
        // store x and y for later
        $(this).x = x;
        $(this).y = y;
    });



    // initialize each piece
    /* for (var i = 0; i < divs.length; i++) {
         var div = divs[i];
 
         // calculate x and y for this piece
         var x = ((i % 4) * 100);
         var y = (Math.floor(i / 4) * 100);
 
         // set basic style and background
         div.className = "puzzlepiece";
         div.style.left = x + 'px';
         div.style.top = y + 'px';
         div.style.backgroundImage = 'url("../Images/15PuzzleBackground.jpg")';
         div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
 
 
 
         // store x and y for later
         div.x = x;
         div.y = y;
     }*/
};
init();


$(document).ready(() => {

    $('#puzzlearea').on('click', 'div', clickMethod());
    $('#puzzlearea').on({ mouseenter: inFunction, mouseleave: outFunction }, 'div');
    $('#shufflebutton').click(shuffle);
    /*
        $('#puzzlearea div').each(function(i){
            console.log($(this).css("left"));
        });*/

});

function inFunction() {
    let divx = $(this)[0].getBoundingClientRect().left;
    let divy = $(this)[0].getBoundingClientRect().top;

    let puzzleareax = $('#puzzlearea')[0].getBoundingClientRect().left;
    let puzzleareay = $('#puzzlearea')[0].getBoundingClientRect().top;

    let x = parseInt(divx) - parseInt(puzzleareax) - 1;
    let y = parseInt(divy) - parseInt(puzzleareay) - 1;

    if (((emptyPlace.getX() - 100 === x || emptyPlace.getX() + 100 === x) && y === emptyPlace.getY())
        || ((emptyPlace.getY() - 100 === y || emptyPlace.getY() + 100 === y) && x === emptyPlace.getX())) {

        $(this).css({ "borderColor": "red", "color": "red" });
    }

}
function outFunction() {

    $(this).css({ "borderColor": "black", "color": "black" });

}


function clickMethod() {
    return function () {
        let divx = $(this)[0].getBoundingClientRect().left;
        let divy = $(this)[0].getBoundingClientRect().top;


        let puzzleareax = $('#puzzlearea')[0].getBoundingClientRect().left;
        let puzzleareay = $('#puzzlearea')[0].getBoundingClientRect().top;

        let x = parseInt(divx) - parseInt(puzzleareax) - 1;
        let y = parseInt(divy) - parseInt(puzzleareay) - 1;

        if (((emptyPlace.getX() - 100 === x || emptyPlace.getX() + 100 === x) && y === emptyPlace.getY())
            || ((emptyPlace.getY() - 100 === y || emptyPlace.getY() + 100 === y) && x === emptyPlace.getX())) {
            //$(this).attr('id', 'div_' + emptyPlace.getX() + '_' + emptyPlace.getY());
            $(this).animate({
                left: emptyPlace.getX(),
                top: emptyPlace.getY()
            });
            emptyPlace.setX(x);
            emptyPlace.setY(y);

        }

       




    }

}

let emptyPlace = (function () {
    let x = 300;
    let y = 300;

    return {
        setX: function (val) {
            x = val;
        },
        setY: function (val) {
            y = val;
        },
        getX: function () {
            return x;
        },
        getY: function () {
            return y;
        }
    }
})();


function shuffle() {
    let shuffledArr = [];

    while (shuffledArr.length < 15) {
        let rand = parseInt(Math.random() * 15);
        if (!shuffledArr.includes(rand)) {
            shuffledArr.push(rand);
        }
    }

    let positionArr = [
        { left: 0, top: 0 },
        { left: 100, top: 0 },
        { left: 200, top: 0 },
        { left: 300, top: 0 },
        { left: 0, top: 100 },
        { left: 100, top: 100 },
        { left: 200, top: 100 },
        { left: 300, top: 100 },
        { left: 0, top: 200 },
        { left: 100, top: 200 },
        { left: 200, top: 200 },
        { left: 300, top: 200 },
        { left: 0, top: 300 },
        { left: 100, top: 300 },
        { left: 200, top: 300 }
    ];

    let arrElements = [];
    $('#puzzlearea div').each(function (i) {
        arrElements.push($(this));
        $(this).remove();
    });

    for (let i = 0; i < arrElements.length; i++) {
        let index = shuffledArr[i];
        arrElements[index].css({
            "top": positionArr[i].top + "px",
            "left": positionArr[i].left + "px"
        });
        $('#puzzlearea').append(arrElements[index]);

    }

    //reset the emptyPlace coordinates
    emptyPlace.setX(300);
    emptyPlace.setY(300);


}
/*
function won() {
    let result = true;

    let positionArr = [
        { left: 0, top: 0 },
        { left: 100, top: 0 },
        { left: 200, top: 0 },
        { left: 300, top: 0 },
        { left: 0, top: 100 },
        { left: 100, top: 100 },
        { left: 200, top: 100 },
        { left: 300, top: 100 },
        { left: 0, top: 200 },
        { left: 100, top: 200 },
        { left: 200, top: 200 },
        { left: 300, top: 200 },
        { left: 0, top: 300 },
        { left: 100, top: 300 },
        { left: 200, top: 300 }
    ];

    let arrIDs = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9", "div10", "div11", "div12", "div13", "div14", "div15"];


    console.log($('#puzzlearea div')[0].style.left);
    $('#puzzlearea div').each(function (index) {

        console.log((positionArr[index].left === parseInt($(this).css("left"))) && ((positionArr[index].top === parseInt($(this).css("top")))));
        if (((positionArr[index].left === parseInt($(this).css("left")))
            && (positionArr[index].top === parseInt($(this).css("top"))))) {
                if(!($(this).attr('id') === arrIDs[index])){
                    result = false;
                }
         
        }

    });
    console.log("current result: " + result);

    return result;

}*/

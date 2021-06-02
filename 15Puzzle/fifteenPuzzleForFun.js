

let puzzleareax = $('#puzzlearea')[0].getBoundingClientRect().left;
let puzzleareay = $('#puzzlearea')[0].getBoundingClientRect().top;
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



    


    //  $('#puzzlearea div').click(moveDiv(200,300));
    /* let divtest = $('#15div');
 
     let div15x = $('#14div')[0].getBoundingClientRect().left;
     let div15y = $('#14div')[0].getBoundingClientRect().top;
     console.log(parseInt(div15x) - parseInt(puzzleareax) - 1);
     console.log(parseInt(div15y) - parseInt(puzzleareay) - 1);
 
     let x = parseInt(div15x) - parseInt(puzzleareax) - 1;
     let y = parseInt(div15y) - parseInt(puzzleareay) - 1;*/

    console.log("before");
    console.log(emptyPlace.getX());
    console.log(emptyPlace.getY());

    console.log($('#puzzlearea div'));


    //  $('#puzzlearea div').click(moveDiv(emptyPlace.getX(), emptyPlace.getY()));
    //$('#puzzlearea div').click(clickMethod());
    $('#puzzlearea').on('click','div',clickMethod());
    /* $('#puzzlearea div').hover(function(){
        $(this).css({"borderColor": "red", "color" : "red"});
 
     },function(){
         $(this).css({"borderColor": "black", "color" : "black"});
     });*/


     //$('#puzzlearea div').hover(inFunction, outFunction);
     //$('#puzzlearea').on('hover','div',inFunction, outFunction);
     
     $('#puzzlearea').on({mouseenter: inFunction,mouseleave: outFunction},'div');

    $('#shufflebutton').click(shuffle);
    /*
        $('#shufflebutton').click( function(){
            $('#puzzlearea div')[5].style.left = 0;
            $('#puzzlearea div')[5].style.top = 0;
        });*/




});
function inFunction() {
    let divx = $(this)[0].getBoundingClientRect().left;
    let divy = $(this)[0].getBoundingClientRect().top;

    let x = parseInt(divx) - parseInt(puzzleareax) - 1;
    let y = parseInt(divy) - parseInt(puzzleareay) - 1;
    console.log("inside hover infunction");
    if (((emptyPlace.getX() - 100 === x || emptyPlace.getX() + 100 === x) && y === emptyPlace.getY())
        || ((emptyPlace.getY() - 100 === y || emptyPlace.getY() + 100 === y) && x === emptyPlace.getX())) {

        $(this).css({ "borderColor": "red", "color": "red" });
    }

}
function outFunction() {

    $(this).css({ "borderColor": "black", "color": "black" });

}
/*
function hoverOverDiv() {
    return function result(){
        let divx = $(this)[0].getBoundingClientRect().left;
        let divy = $(this)[0].getBoundingClientRect().top;

        let x = parseInt(divx) - parseInt(puzzleareax) - 1;
        let y = parseInt(divy) - parseInt(puzzleareay) - 1;

        if(((emptyPlace.getX() - 100 === x || emptyPlace.getX() + 100 === x) && y === emptyPlace.getY())
        || ((emptyPlace.getY() - 100 === y || emptyPlace.getY() + 100 === y) && x === emptyPlace.getX())) {
            return {
                inFunction: function () {
                    $(this).css({ "borderColor": "red", "color": "red" });
        
                },
                outFunction: function () {
                    $(this).css({ "borderColor": "black", "color": "black" });
                }
            }
    }
}

}*/
function animation() {
    $(this).animate({
        left: 300
    });
}

function moveDiv(topOffset, leftOffset) {



    return function () {
        $(this).animate({
            left: leftOffset,
            top: topOffset
        });
    }
}
function clickMethod() {
    return function () {
        let divx = $(this)[0].getBoundingClientRect().left;
        let divy = $(this)[0].getBoundingClientRect().top;

        let x = parseInt(divx) - parseInt(puzzleareax) - 1;
        let y = parseInt(divy) - parseInt(puzzleareay) - 1;
        console.log("inside click");
        console.log("emptypalceX: "+ emptyPlace.getX());
        console.log("emptypalceY: "+ emptyPlace.getY());
        if (((emptyPlace.getX() - 100 === x || emptyPlace.getX() + 100 === x) && y === emptyPlace.getY())
            || ((emptyPlace.getY() - 100 === y || emptyPlace.getY() + 100 === y) && x === emptyPlace.getX())) {
                console.log("inside if clause!");
            $(this).attr('id', 'div_' + emptyPlace.getX() + '_' + emptyPlace.getY());
            $(this).animate({
                left: emptyPlace.getX(),
                top: emptyPlace.getY()
            });
            emptyPlace.setX(x);
            emptyPlace.setY(y);
            console.log("after");
            console.log(emptyPlace.getX());
            console.log(emptyPlace.getY());

        }else{
            console.log("can't go in if clause!");
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
    console.log("*****");
    console.log($('#puzzlearea div'));
    console.log("*****");

    let arrElements =[];
    $('#puzzlearea div').each(function(i){
        arrElements.push($(this));
        $(this).remove();
    });
    //console.log(arrElements);
   // console.log($('#puzzlearea div'));

   console.log(shuffledArr);
    for(let i = 0 ; i < arrElements.length; i++){ 
       let index = shuffledArr[i];
       arrElements[index].css({
        "top": positionArr[i].top + "px",
        "left": positionArr[i].left + "px"
       });
       $('#puzzlearea').append(arrElements[index]);

    }
console.log("________________");
console.log($('#puzzlearea div'));
console.log("________________");

    //reset the emptyPlace coordinates
    emptyPlace.setX(300);
    emptyPlace.setY(300);

    
 /*   console.log(arr);
    let divCollection = $('#puzzlearea div');
    console.log(divCollection);
    for (let i = 0; i < divCollection.length; i++) {
        let index = arr[i];
        console.log("top: " + positionArr[index].top + "index: " + index);*/
        /* divCollection[index].animate({
             top: positionArr[i].top,
             left: positionArr[i].left
         });*/
/*
        let x = null;
        let innerHtmlValue = parseInt(divCollection[i].innerText);
        if (arr.includes(innerHtmlValue)) {
            x = arr.indexOf(innerHtmlValue);
        }
        divCollection[x].style.top = positionArr[i].top;
        divCollection[x].style.left = positionArr[i].left;

    }*/
    /*
        let obj2 = { x: { y: 2, z: 3 } };
        console.log("******" + obj2.x.y);
    */

/*
    console.log(divCollection);

    console.log("inside shuffle");*/
}
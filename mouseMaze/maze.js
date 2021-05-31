$(document).ready(() => {

    let mouseStillInMaze = false;
    $('div .boundary').hover(function (e) {
        $('div .boundary').addClass("youlose");
    });

    $('#start').click(() => {
        $('div .boundary').removeClass("youlose");

    });
   
    $('#maze').mouseenter(() => {
        mouseStillInMaze = true;
    });
    $('#maze').mouseleave(() => {
        mouseStillInMaze = false;
        $('div .boundary').addClass("youlose");
    });
    let originalText = $('#status').text();
    $('#end').mouseenter(() => {
        if (!$('div .boundary').hasClass('youlose') && mouseStillInMaze) {

            //alert('You Win the Game!');
            $('#status').text('You Win the Game!');
        }
        else if (!mouseStillInMaze) {
           // alert("Please walk inside the maze! DON'T CHEAT!");
            $('#status').text("Please walk inside the maze! DON'T CHEAT!");
          
            
        }
        else {

            $('#status').text('You Lost The Game');
            //alert('You Lost The Game!');
        }


    });

    $('#end').mouseleave(()=>{
        $('#status').text(originalText);
    });


});
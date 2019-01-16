$(function(){

    /* Disply the containers upon clicing the a inside showcase */
        $("#showcase-a-container").on('click', function(){
         $("#title-container, #techno-showcase-container, #second-showcase-container, #php-showcase-container, #first-showcase-container, footer").removeClass('hiding');
        
    });




    // Getting the height of the showcase in the global context (for use later)
         var showcaseHeight = $("#showcase").height();

        /* Scrolling down the page upon clicking the a inside showcase */
        $('#showcase-a-container').click(function(event) {
            // Preventing default action of the event
            event.preventDefault();
            $('html, body').animate({ scrollTop: showcaseHeight }, 550);
        //                                       |    |
        //                                       |    --- duration (milliseconds) 
        //                                       ---- distance from the top
    });






     // Hiding various elements to make then appear as you scroll...
        $('#html-img, #css-img, #js-img, #cool-img').hide();
      //  $('#git-div, #node-div, #ps-div, #wordpress-div').slideDown();



     // Makes elements appear as you scroll...
        $(window).scroll(function() {
            var height = $(window).scrollTop();

            if(height  >= showcaseHeight + 200) {

                $('#html-img').fadeIn(500);
                $('#css-img').delay(200).fadeIn(500);
                $('#js-img').delay(400).fadeIn(500);
                $('#cool-img').delay(600).fadeIn(500);     
            }
     });


     // Makes elements appear as you scroll...
     $(window).scroll(function() {
        var height = $(window).scrollTop();

        if(height  >= showcaseHeight + 600) {

            $('#git-div').animate({right: '600px'});
            $('#node-div').delay(200).animate({left: '600px'});
           
        }
    });




 










});
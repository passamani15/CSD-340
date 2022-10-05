
//Larissa Passamani Lima

// When the menu item is clicked, get the #id from the href value, then scroll to the #id element


$(document).ready(function(){ 
   
    // $('#scroll').click(function(){ 
    //     $("html, body").animate({ scrollTop: 0 }, 600); 
    //     return false; 
    // }); 

    
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 400);
    return false;
});


});
$(function(){
    $("#lnk-about").click(function(e){
        $("body").animate({scrollTop: $("#about").offset().top}, 700);
        e.preventDefault();
    });
    $("#lnk-the_hackathon").click(function(e){
        $("body").animate({scrollTop: $("#the_hackathon").offset().top}, 700);
        e.preventDefault();
    });
    $("#lnk-crown").click(function(e){
        $("body").animate({scrollTop: $("body").offset().top}, 700);
        e.preventDefault();
    });
});
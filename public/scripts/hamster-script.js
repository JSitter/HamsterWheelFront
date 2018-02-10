var navigation = $(".navigation");

$(document).ready(function(){

})


$(window).scroll(function(){
    if( $(this).scrollTop() > 400) {
        navigation.addClass("main-nav-scrolled");
    }else{
        navigation.removeClass("main-nav-scrolled")
    }
});
var navigation = $(".navigation");

$(window).scroll(function(){
    if( $(this).scrollTop() > 400) {
        navigation.addClass("main-nav-scrolled");
    }else{
        navigation.removeClass("main-nav-scrolled")
    }
});
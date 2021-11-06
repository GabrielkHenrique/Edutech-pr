function ativaScrollSuave(selector) {

    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  
    });
}
ativaScrollSuave('a[href*=panel-about]')
ativaScrollSuave('a[href*=panel-info-Form]')
ativaScrollSuave('a[href*=panel-speakers]')
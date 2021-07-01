$('.js-scroll-trigger').click(function(){
    $('.navbar-collapse').collapse('hide');
    $('nav button i').attr('class', 'fas fa-grip-lines');
});

var but_ham = $('nav button');
but_ham.click(function() {
    var value = $(this).attr('aria-expanded');
    if(value === 'false') {
        $('nav button i').attr('class', 'fas fa-times');
    } else {
        $('nav button i').attr('class', 'fas fa-grip-lines');
    }
});
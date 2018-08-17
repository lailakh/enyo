$('li > strong > a').click(function() {
    $('li > strong > a').removeClass('active');
    $(this).addClass('active');
});
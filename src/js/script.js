$(function(){
    $('.open-popup').on('click', function() {
        $(this).fadeOut('slow');
        $('.overlay, #activation').fadeIn('slow');
    });
    $('.info-popup__close').on('click', function() {
        $('.overlay, #activation').fadeOut('slow');
        $('open-popup').fadeIn('slow');
    });

    $('#get-code').on('click', function(){
        $(this).addClass('popup__form-btn--disabled');
        $(this).text('Отправить повторно через 30 секунд');
    });


    // step 1
    $('#more').on('click', function() {
        $('.certificate__content, .confirm__content').fadeOut('slow');
        $('.info-popup').fadeIn('slow');
    });
    $('.info-popup__close').on('click', function() {
        $('.info-popup').fadeOut('slow');
        $('.certificate__content, .confirm__content').fadeIn('slow');
        $('#step-2').removeClass('certificate__step--disabled');
    });

    // step 2
    $('#address').on('click', function() {
        $('.certificate__content').fadeOut('slow');
        $('.map-popup').fadeIn('slow');
    });
    $('.map-popup__choose-btn').on('click', function() {
        $('.map-popup').fadeOut('slow');
        $('.certificate__content').fadeIn('slow');
        $('#step-3').removeClass('certificate__step--disabled');
    });
    $('.map-popup__close').on('click', function() {
        $('.map-popup').fadeOut('slow');
        $('.certificate__content').fadeIn('slow');
    });


    // step 3
    $('#datetime').on('click', function() {
        $('.certificate__content').fadeOut('slow');
        $('.datetime-popup').fadeIn('slow');
    });
    $('.map-popup__choose-btn').on('click', function() {
        $('.datetime-popup').fadeOut('slow');
        $('.certificate__content').fadeIn('slow');
    });

    // confirm
    $('#save').on('click', function() {
        $('#confirm-text').text('Мы вас записываем,  ожидайте. В течении 1 часа вам придёт смс-подтверждение о бронировании');
        $('.confirm__item-buttons').css('display', 'none');
    });


    // datepicker
    $(".datetime-popup__calendar").datepicker({
        minDate: new Date(),
    });
    var chosenDate = $( ".datetime-popup__calendar" ).datepicker( "getDate" );
    $('#date').text(chosenDate);
    //$('#time').text();
});
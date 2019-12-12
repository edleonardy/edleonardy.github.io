$(window).on('load', function()
{
    if( $('#display-img').height() > $('#display-img').width())
        {
            $('#display-img').addClass('portrait');
        }

    $('figure').each(function()
    {
        var fig = $(this);
        var img = fig.children('img:first');

        if( img.height() > img.width())
        {
            fig.addClass('portrait');
        }
    });   
});    
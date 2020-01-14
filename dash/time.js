$(document).ready(function()  
        {  
            ShowTime();
        });  

function ShowTime()
{
    var d = new Date($.now());
    document.getElementById('time').innerHTML = d.toLocaleTimeString("en-GB");
    document.title = d.toLocaleTimeString("en-GB");

    var h = d.getHours()
    var g = ""
    if (h < 6)
    {
        g = "it's late wtf are u doing?";
    }
    else if (h < 12)
    {
        g = "zou san. good morning.";
    }
    else if (h < 18)
    {
        g = "buenas tardes. good afternoon.";
    }
    else
    {
        g = "selamat malam. good evening.";
    }

    document.getElementById('greeting').innerHTML = g;
    window.setTimeout("ShowTime()", 1000);
}
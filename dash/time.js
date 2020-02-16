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
        g = "..it's late just go to bed";
        imgSrc = "late.jpg";
    }
    else if (h < 12)
    {
        g = "zou san. good morning.";
        imgSrc = "morning.jpg";
    }
    else if (h < 18)
    {
        g = "buenas tardes. good afternoon.";
        imgSrc = "afternoon.jpg";
    }
    else
    {
        g = "malam. good evening.";
        imgSrc = "evening.jpg";
    }

    document.getElementById('greeting').innerHTML = g;
    document.getElementById("bg").src=imgSrc;
    window.setTimeout("ShowTime()", 1000);
}
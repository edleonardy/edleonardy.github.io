$(document).ready(function()  
        {  
            ShowTime();
        });  

function ShowTime()
{
    var date = new Date($.now());
    var time = String(date.getHours()).padStart(2, 0) + ":" + String(date.getMinutes()).padStart(2, 0)
    document.getElementById('time').innerHTML = time;
    document.title = time;

    var hour = date.getHours()
    var greetingText = ""

    if (hour < 5)
    {
        greetingText = "please just go to bed.";
    }
    else if (hour < 8)
    {
        greetingText = "good morning! thank you for starting early.";
    }
    else if (hour < 12)
    {
        greetingText = "good morning! have a great day.";
    }
    else if (hour < 18)
    {
        greetingText = "hello. good afternoon!";
    }
    else
    {
        greetingText = "good evening.";
    }
    document.getElementById('greeting').innerHTML = greetingText;
    window.setTimeout("ShowTime()", 1000);
}
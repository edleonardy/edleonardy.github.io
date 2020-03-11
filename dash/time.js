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

    if (hour < 6)
    {
        greetingText = "..it's late just go to bed";
    }
    else if (hour < 12)
    {
        greetingText = "zou san.";
    }
    else if (hour < 18)
    {
        greetingText = "buenas tardes.";
    }
    else
    {
        greetingText = "malam.";
    }

    weekText = "week " + weekOfYear(date) + " of " + weeksOfYear(date) + ".";
    yearText = "year " + percentageYear(date) + " completed.";

    greeting = weekText + "<br/>" + yearText;
    document.getElementById('greeting').innerHTML = greeting;
    window.setTimeout("ShowTime()", 1000);
}

function dayOfYear(date)
{
    var start = new Date(date.getFullYear(), 0, 0);
    var difference = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(difference / oneDay);
}

function daysOfYear(date)
{
    var end = new Date(date.getFullYear()+1, 0, 0);
    return dayOfYear(end);
}

function weekOfYear(date)
{
    var day = dayOfYear(date);
    var start = new Date(date.getFullYear(), 0, 0);
    return Math.floor((day + start.getDay()) / 7);
}

function weeksOfYear(date)
{
    var end = new Date(date.getFullYear()+1, 0, 0);
    return weekOfYear(end);
}

function percentageYear(date)
{
    return (dayOfYear(date)/daysOfYear(date)*100).toFixed(2) + "%"
}


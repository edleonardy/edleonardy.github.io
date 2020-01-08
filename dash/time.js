function getPosSuccess(pos) {
    var geoLat = pos.coords.latitude.toFixed(5);
    var geoLng = pos.coords.longitude.toFixed(5);
    var geoAcc = pos.coords.accuracy.toFixed(1);
}

function getPosErr(pos)
{
    var geoLat = -5.1393606799999985;
    var geoLng = 119.42001688999994;
}

function getPosErr(err) {
    switch (err.code) {
        case err.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case err.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case err.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        default:
            alert("An unknown error occurred.");
    }
}

$(document).ready(function()  
        {  
            ShowTime();  
            ShowWeather(); 
        });  

function ShowTime()
{
    var d = new Date($.now());
    document.getElementById('time').innerHTML = d.toLocaleTimeString("en-GB");

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

function ShowWeather()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
    }

    var URLRequest = "https://weather-retriever-ed.herokuapp.com/?lat=" + String(geoLat) + "&lon=" + String(geoLng)
    $.getJSON(URLRequest, function(data)
    {
        var main = data.currently.summary;
        var temp = data.main.temperature - 273.15;
        document.getElementById('temp').innerHTML = temp + "ºC";
        document.getElementById('weather-condition').innerHTML = main;
    })

    window.setTimeout("ShowTime()", 600000);
}
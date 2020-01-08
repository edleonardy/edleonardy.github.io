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

function getPosSuccess(pos) {
    var geoLat = pos.coords.latitude.toFixed(5);
    var geoLng = pos.coords.longitude.toFixed(5);

    var weatherUrl = "https://weather-retriever-ed.herokuapp.com/?lat=" + geoLat.toString() + "&lon=" + geoLng.toString()
    $.getJSON(weatherUrl, function(data)
    {
        var main = data.currently.summary;
        var temp = data.currently.temperature;
        document.getElementById('temp').innerHTML = temp + "ºC";
        document.getElementById('weather-condition').innerHTML = main;
    })

    var reverseGeoUrl = "https://nominatim.openstreetmap.org/reverse?lat=" + geoLat.toString() + "&lon=" + geoLng.toString()
    
    $.ajax({
        type: "GET",
        url: reverseGeoUrl,
        dataType: "xml",
        success: function(xml)
        {
            $(xml).find('addressparts').each(function()
            {
                var location = $(this).find("country").text()
                if (location != null)
                {
                    var left_hand_side = $(this).find("city").text();
                    if (left_hand_side == null)
                    {
                        var left_hand_side = $(this).find("county").text();
                        if (left_hand_side == null)
                        {
                            var left_hand_side = $(this).find("state").text();
                        }
                    }
                    if (left_hand_side == null)
                    {
                        left_hand_side + ", " + location
                    }
                    document.getElementById('location').innerHTML = location;
                }
            })
        }
    });

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

function ShowWeather()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
    }

    window.setTimeout("ShowTime()", 600000);
}
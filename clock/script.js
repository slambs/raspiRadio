/*
script.js
for use with HTML clock
Andy Felong
09 Sep 2016
*/


// can't use "const" in IE -- so use "var"
var CLOCK_CHECK_SECS = 20 * 1000; // 20 seconds
var TEMP_CHECK_MINS = 10 * 60000; // 10 minutes
var WU_URL = "https://api.openweathermap.org/data/2.5/weather?id=6949518&appid=a2ff0a2999da9e41d1c0a3e125807cb1"
var TEMP_UNITS = "temp"; // WU temperature units: Kelvin // x − 273.15 --> Celcius


function getTime() {
    var today = new Date();
    var hrs = today.getHours();
    var mins = today.getMinutes();
    if (mins < 10) {
        mins = "0" + mins; // will convert num to string but that's OK
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    document.getElementById('time_txt').innerHTML = hrs + ":" + mins; // update time div
    var t = setTimeout(getTime, CLOCK_CHECK_SECS);
}




function getTemp() {
    jQuery(document).ready(function($) {
        $.ajax({
            url: WU_URL, // Weather Underground URL with key and location
            dataType: "jsonp", // cross-domain JSON request
            success: function(parsed_json) {
                console.log(parsed_json.main.temp);
                
                var kelvin= parsed_json.main.temp;
                var celcius = Math.round(kelvin - 273.15);
                var theTemp = celcius + "&#8451";
                document.getElementById('temp_txt').innerHTML = theTemp; // update temperature div
                var tmp = setTimeout(getTemp, TEMP_CHECK_MINS);
            }
        });
    });
}
;



// Example Call : http://api.openweathermap.org/data/2.5/forecast?id=6949518&APPID={APIKEY}
//https://api.openweathermap.org/data/2.5/weather?id=6949518&appid=a2ff0a2999da9e41d1c0a3e125807cb1

//https://www.internet-radio.com/player/?mount=http://38.96.148.18:8494/listen.pls&title=KSQM%20FM%2091.5&website=http://ksqmf.com
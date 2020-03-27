/*
script.js
for use with HTML clock
Andy Felong
09 Sep 2016
*/

// Ids --> ibk = 6949518// schlitters;

// can't use "const" in IE -- so use "var"
var CLOCK_CHECK_SECS = 20 * 1000; // 20 seconds
var TEMP_CHECK_MINS = 10 * 60000; // 10 minutes
var WU_URL = "https://api.openweathermap.org/data/2.5/weather?id=2765888&appid=a2ff0a2999da9e41d1c0a3e125807cb1"
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
    return hrs + ":" + mins; 
}




function getTemp() {
    jQuery(document).ready(function($) {
        $.ajax({
            url: WU_URL, // Weather Underground URL with key and location
            dataType: "jsonp", // cross-domain JSON request
            success: function(parsed_json) {
                console.log(parsed_json.main.temp);
                console.log(parsed_json.name);
                var CityName = parsed_json.name;
                var kelvin= parsed_json.main.temp;
                var celcius = Math.round(kelvin - 273.15);
                var theTemp = celcius + "&#8451";
                document.getElementById('temp_txt').innerHTML = CityName + " : " +theTemp; // update temperature div
                var tmp = setTimeout(getTemp, TEMP_CHECK_MINS);
            }
        });
    });
};


function timeSnap(){
    var time = getTime();
    console.log(time);
    document.getElementById('timeFreeze').innerText = time;
}
// city id can be found here : http://bulk.openweathermap.org/sample/


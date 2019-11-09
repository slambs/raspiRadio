/*
script.js
for use with HTML clock
Andy Felong
09 Sep 2016
*/


// can't use "const" in IE -- so use "var"
var CLOCK_CHECK_SECS = 20 * 1000; // 20 seconds
var TEMP_CHECK_MINS = 10 * 60000; // 10 minutes
var WU_URL = "http://api.wunderground.com/api/0123456789abcdef/geolookup/conditions/q/**STATE**-like-CA/Some_City.json";
var TEMP_UNITS = "temp_f"; // WU temperature units: Fahrenheit ("temp_f") or Celcius ("temp_c")


function getTime() {
    var today = new Date();
    var hrs = today.getHours();
    if (hrs > 12) { // use 12-hour clock, not 24
        hrs -= 12;
    } else if (hrs === 0) {
        hrs = 12;
    }
    var mins = today.getMinutes();
    if (mins < 10) {
        mins = "0" + mins; // will convert num to string but that's OK
    }
    document.getElementById('time_txt').innerHTML = hrs + ":" + mins; // update time div
    var t = setTimeout(getTime, CLOCK_CHECK_SECS);
}


// getTemp() - uses JQuery library to GET and parse JSON - included by index.html
// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

function getTemp() {
    jQuery(document).ready(function($) {
        $.ajax({
            url: WU_URL, // Weather Underground URL with key and location
            dataType: "jsonp", // cross-domain JSON request
            success: function(parsed_json) {
                var location = parsed_json['location']['city']; // could use city string if desired
                var temp_f = parsed_json['current_observation'][TEMP_UNITS]; // temperature of city passed in URL
                temp_f = Math.round(temp_f); // round temp to nearest degree
                var theTemp = temp_f + "&deg;";
                document.getElementById('temp_txt').innerHTML = theTemp; // update temperature div
            }
        });
    });
    var tmp = setTimeout(getTemp, TEMP_CHECK_MINS);
}
// Ids --> ibk = 6949518// schlitters;
var CLOCK_CHECK_SECS = 20 * 1000; // 20 seconds
var TEMP_CHECK_MINS = 10 * 60000; // 10 minutes
var WU_URL = "https://api.openweathermap.org/data/2.5/weather?id=2765888&appid=a2ff0a2999da9e41d1c0a3e125807cb1"
var TEMP_UNITS = "temp"; // WU temperature units: Kelvin // x − 273.15 --> Celcius


function getTime() {
    var today = new Date();
    var timeString = today.toLocaleString('de-DE', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    })
    document.getElementById('time_txt').innerHTML = timeString; // update time div
    var t = setTimeout(getTime, CLOCK_CHECK_SECS);
    return timeString;
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
                var kelvin = parsed_json.main.temp;
                var celcius = Math.round(kelvin - 273.15);
                var theTemp = celcius + "&#8451";
                document.getElementById('temp_txt').innerHTML = CityName + " : " + theTemp; // update temperature div
                var tmp = setTimeout(getTemp, TEMP_CHECK_MINS);
            }
        });
    });
};

function timeSnap() {
    var timeStopValue = getTime();
    console.log(timeStopValue);
    document.getElementById('timeFreeze').innerText = timeStopValue;
    localStorage.setItem('timeStopValue', timeStopValue);
}
// city id can be found here : http://bulk.openweathermap.org/sample/

function insideTempAndMoist() {
    jQuery.get('tempIn.txt', function(data) {
        console.log(data); //process text file line by line
        document.getElementById('temp_in').innerText = data;
    });

    setTimeout(insideTempAndMoist, 20000);
}
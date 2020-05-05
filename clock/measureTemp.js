var sensor = require("node-dht-sensor");

sensor.read(22, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature.toFixed(2)}°C, humidity: ${humidity.toFixed(2)}%`);
  }
});

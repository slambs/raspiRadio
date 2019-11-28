
This is a simple alarm Clock Raspberry Pi Project.

__Hardware__

* Raspi 3
* 5 Inch Monitor
* A triple socket adapter
* Wood, Glue screws etc...

__Software__ 

*...

__Install and run server__

* cd /clock 
* npm install
* node clock.js

Depending on the config file, the programm should run at localhost:8760 or "yourRaspi'sIP":8760
you can see the time from there, change the stations or set the alarm.

on the raspberry pi open the autostart document with the editor of your choice.
* sudo vim /home/pi/.config/lxsession/LXDE-pi/autostart

enter the following:


__Resources__

Links of Projects that inpired me / gave me ideas / helped me get the project done.

1. https://andyfelong.com/2016/09/r-pi-clock-radio-zeroed/
1. https://medium.com/crowdbotics/build-your-own-radio-streaming-app-with-howler-js-637f929decc0
1. https://github.com/ct-Open-Source/ct-Raspi-Radiowecker
1. https://raspberrypi.stackexchange.com/questions/69204/open-chromium-full-screen-on-start-up
1. http://jplayer.org/latest/demo-08/

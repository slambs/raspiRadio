
This is a simple alarm Clock Raspberry Pi Project.

__Hardware__

* Raspi 4
* Official Raspi 7 Inch Monitor
* USB C Powersupply 

__Insbructions__ 

After you set up your raspi and display do the following:
1. sudo update && sudo upgrade
1. sudo apt-get install unclutter (to hide the mouse cursor)
1. Change the displays orientation :
    * sudo vim /boot/config.txt
    * add the following at the top of the file : lcd_rotate=2
    * save and reboot

1. Add following lines to the autostart document so that the server runs on Kiosk Mode (note the new path on the raspi-4):
    * cd ../..
    * sudo vim  etc/xdg/lxsession/LXDE-pi/autostart
    * add these lines
        @point-rpi
        @xset s off
        @xset -dpms
        @xset s noblank
        # raspi alarm clock
        @node /home/pi/raspiRadio/clock/clock.js
        @chromium-browser --kiosk --app=http://localhost:8760
    * save file
    
1. type cd and git clone this project
1. cd raspiRadio/clock
1. npm install

...and you should be good to go.

__Install and run server__

* cd /clock 
* npm install
* node clock.js

Depending on the config file, the programm should run at localhost:8760 or "yourRaspi'sIP":8760
you can see the time from there, change the stations or set the alarm.

on the raspberry pi open the autostart document with the editor of your choice.

enter the following:



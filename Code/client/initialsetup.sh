#!/bin/bash
echo "Run dos2unix fix if unable to run: "
printf '%s\n' "sed -i 's/\r$//' initialsetup.sh"

# Installing dependencies
sudo apt update && sudo apt -y full-upgrade
sudo apt install curl

# CHECK IF NODE IS INSTALLED
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt install nodejs
sudo apt install fswebcam

# Making mjpg-streamer
sudo su
sudo cp -a /root/mjpg-streamer/ /home/pi/
make -C /home/pi/mjpg-streamer
exit

# Download code
rm -f client.js
rm -f package.json
rm -f package-lock.json

wget 'https://raw.githubusercontent.com/TheOneFrank/Elementice-TechLauncher/master/Code/client/client.js'
wget 'https://raw.githubusercontent.com/TheOneFrank/Elementice-TechLauncher/master/Code/client/package.json'
wget 'https://raw.githubusercontent.com/TheOneFrank/Elementice-TechLauncher/master/Code/client/package-lock.json'

# npm install
npm install
echo "Add 'sudo node /home/pi/client.js &' to /etc/rc.local"
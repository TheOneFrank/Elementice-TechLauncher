#!/bin/bash

if [ $# == 0 ]; then
	echo "Usage: $0 Pi_Array_Number"
	echo "Pi_Array_Number:" 
	echo "0    = Master Pi"
	echo "1-14 = Normal Pi"
fi

echo "pi$1"

spawn "hostnamectl set-hostname pi$1"
expect ""
send "2"

#!/bin/bash

for i in {1..5}
do
    #Defino como se van a llamar los archivos que voy a leer
    archivo="loremipsum-"$i".txt"
    #Contamos la cantidad de lineas que contiene el archivo con el comando wc 
    lineas=$(wc -l $archivo | cut -c -2)
#)   
    #Muestro la cantidad de lineas leidas x archivo
    echo $archivo tiene $lineas lineas.
done
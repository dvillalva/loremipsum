# Comandos de Linux - Ubuntu

[Ubuntu](https://www.guia-ubuntu.com/index.php/Comandos 'Fuente')

Los siguientes son algunos comandos que pueden ser de utilidad: 
 
**man comando**
Muestra el manual de un comando, útil para aprender a utilizar sus argumentos

Ej: *man man*

**cd nom_directorio**
Cambia de directorio 	cd sólo, va a tu home

**cd ..** 
Sube un nivel de directorios 	Si estabas en */home/usuario/* pasas a */home/*

**cd -**
Vas a la ubicación donde estabas antes 	si desde */home/usuario* haces *cd /etc/X11* y luego cd - vuelves a */home/usuario*

**ls**
Lista los archivos de un determinado directorio
Poniendo solo ls mostrara los archivos del directorio actual

**ls -l** 
Lista también las propiedades y atributos

**ls -a** 
Lista todos los archivos, incluidos los ocultos y los del sistema 

**touch** 
Crea un archivo vacio. Sintaxis: *touch nom_archivo* 

**mkdir nom_directorio** 
Crea directorio nom_directorio 

**cat fichero**
Muestra el contenido de un fichero 	*cat /home/NOMBRE_USUARIO/YO/prueba.php* 

**su o sudo**
Con este comando accedemos al sistema como root. En Ubuntu se puede utilizar *gksudo*
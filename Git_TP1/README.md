

## 1. **What is this ?**

This folder contains the first assignement asked in the web tech course. The idea was to create a local site which returns a message depending on the url request.

## 2. **Installing :**

1. Download the folder
2. Make sure you have the necessary soft to run the scripts
	- npm : v6.14.11
	- nodeJS : v14.15.5

## 3. **Usage instruction :**

1. Open your favorite terminal and navigate to the Git_TP1 folder you just downloaded
2. Once inside the folder, run the following command :

	    node index.js
	
	3. Now you can open your favorite internet navigator and enter one of the following URL:
		
		. //http://localhost:8080/hello?name=Romain
		
		. //http://localhost:8080/hello?name=WhatEverYouWant
		
		. //http://localhost:8080/hello?age=13
	
		The web application is designed to return whatever name you'll throw at it except in 2 cases :
		1. The name you throw is "Romain" : you'll get a special answer
		2. You don't throw a name parameter but an age (for exemple) : you'll get a 404 error.

## 5. **Many thanks to :**

- Thomas Desseaux : ami de première heure et soutien nécessaire
- Le cours de Tech. Web : sans lequel il n'y aurait pas cette application



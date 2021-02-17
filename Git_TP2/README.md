

## 1. **What is this ?**

This folder contains the second assignement asked in the web tech course. The idea was to create a local site which, depending on a HTTP request, delete, display, change or create a "user".

## 2. **Installing :**

1. Download the folder
2. Make sure you have the necessary soft to run the scripts
	- npm : v6.14.11
	- nodeJS : v14.15.5
	- body-parser: 1.19.0
	- ExpressJS : 4.17.1

## 3. **Usage instruction :**

1. Open your favorite terminal and navigate to the Git_TP2 folder you just downloaded
2. Once inside the folder, run the following command :

	    node index.js
	
3. Now you can open open Postman and launch one of the following request :
		**A. GET Request**
		The GET request doesn't necessarly need Postman, you can simply give the URL as following
		
		http://localhost:8080/users/X
		
	"X" here being the id of the user you are looking for (1234 for exemple).

		
    **B. POST Request**
    	In Postman, set your request to the "POST" type. Give the following URL :
    	
    	http://localhost:8080/users/
    	
    In the Body sub-tab, select "raw" and the JSON format instead of Text :
    
		{
				"id":"TheIdYouWant",
				"name":"TheNameYouWant"
		}

	**C. PUT Request**
    		In Postman, set your request to the "PUT" type. Give the following URL :
    		
    	http://localhost:8080/users/X

		

    "X" being the id of a user that already exists.
    		In the Body sub-tab, select "raw" and the JSON format instead of Text :
		
		{
				"name":"TheNewNameWanted"
		}

    **D. DELETE Request** 
    In Postman, set your request to the "DELETE" type. Give the following URL :
    
    		http://localhost:8080/users/3456

## 5. **Many thanks to :**

- Thomas Desseaux : ami de première heure et soutien nécessaire
- Le cours de Tech. Web : sans lequel il n'y aurait pas cette application




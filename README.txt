/*
	- Have not implemnted local DB or the cache management
	- Go to the project folder(edge) using command prompt
		- run 'npm install'
		- After the above command completes execution, run 'npm start' to start the project
	
	// As the images in the API are just the place holders, included border for the card view of the images.
	// To test with the image, uncomment the variables 'dummy1', 'dummy2' in 'src/components/ScrollCard.js' and replace it with
	// 'thumbnail' and 'picture' in the return block.
	// Used 'Bottom Tab Navigator' for the naviagtion between the Scroll View and the Map.
*/



/*
	Local DB part:
	
	- We can achieve this by creating a JSON file to store the data retrieved from the API.
	- Once the page is loaded, the data from API is made to copy to local JSON file.
	- After that even if there is no internet connection we can access the data from the local JSON.
	- To achieve the connection between the App and the JSON file, we can use the library 'ngrok' as the link.
	- 'ngrok' acts as a link between the local JSON server and the App.
*/
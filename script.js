const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//Unplash API

const count = 10;
const apiKey = "PtmLBD7g8lFtf48jiXscnHK3QcWj4TTZ85zqtXQntJc";
const apiURL = `https://api.unsplash.com/photos/random/
?client_id=${apiKey}&count=${count}`;


// Creare Elements For Links and Photos
function displayPhotos(){
  photosArray.forEach((photo) =>{
    
  })
}

//Get photos from Unsplah API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
  photosArray = await response.json();
  displayPhotos();
  } catch (error) {
    //catch error
  }
}


// on Load

getPhotos();
//Unplash API

const count = 10;
const apiKey = "PtmLBD7g8lFtf48jiXscnHK3QcWj4TTZ85zqtXQntJc";
const apiURL = `https://api.unsplash.com/photos/random/
?client_id=${apiKey}&count=${count}`;

//Get photos from Unsplah API

async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //catch error
  }
}


// on Load

getPhotos();
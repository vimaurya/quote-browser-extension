list = ["alone","anger","best","courage","death","dreams","failure","freedom","great","imagination","insipirational","jealousy","knowledge","men","money","success"];


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

category = list[getRndInteger(0,15)];
require('dotenv').config();
const apiKey = process.env.API_KEY;
try{
    fetch("https://api.api-ninjas.com/v1/quotes?category="+category,{
            headers:{
            'X-Api-Key' : apiKey
            }
        })
        .then(response => {
            if(response.ok){
                return response.json()
            }
            throw new Error("Response error..🥲")
        })
        .then(data => {
            document.getElementById('advice').innerText = data[0]['quote'];
            
            document.getElementById('author').innerText = " - "+data[0]['author'];
        })
    }
    catch(error){
        document.getElementById('advice').innerText = error;
    }
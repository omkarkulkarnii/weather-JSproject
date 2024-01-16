const apiKey = "YOUR_API_KEY_HERE";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
//example https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey}&q=cityname

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)

    if(response.status == 404 ){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        console.log("err");
    }
    else{
  var data = await response.json();
  // console.log(data); // HERE IN MAIN , TEMP AND HUMIDITY IS PRESENT ...

  document.querySelector(".city").innerText = data.name;
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed+ "Km/Hr";
  document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector('.error').style.display = 'none';
    }

}




searchbtn.addEventListener("click" , ()=>{
    if(searchBox.value == ""){
    alert("Please enter a city name");
    document.querySelector(".weather").style.display = "none";
    }
})



searchbtn.addEventListener("keypress" , (event)=>{
    if(event.key === 'Enter'){
    //console.log("press");
    checkWeather(searchBox.value); 
    }else{
        null;
    }
})
searchBox.addEventListener("keypress" , (event)=>{
    if(event.key === 'Enter'){
    //console.log("press");
    checkWeather(searchBox.value); 
    }else{
        null;
    }
})
searchbtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value); 
})


let tog = false;
const upbtn = document.querySelector(".gen");
upbtn.addEventListener("click" , ()=>{
    if(!tog){
    document.querySelector('.gen').className = "genclick";
    document.querySelector('#secabout').style.display = 'block';
    tog = true;
    }   else{
        document.querySelector('.genclick').className = "gen";
        document.querySelector('#secabout').style.display = 'none';
        tog = false;
    }
})
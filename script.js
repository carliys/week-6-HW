var APIKey = "921b04e876446ef11442dddf61a28f72";
var inputEl = document.getElementById("city");
var submitBtn = document.getElementById("search");

var city;

submitBtn.addEventListener("click", renderWeather);

function kelvin2Fahrenheit(k){
    return Math.floor((k-273.15)*1.8 + 32);
}


function renderWeather() {
    city = inputEl.value;

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    fetch(queryURL).then ((res)=>{
        return res.json()
    }).then ((data)=>{
        console.log(data)
        // first waether card //
        document.querySelector("#date1").textContent = "Date: " + data.list [0].dt_txt;
        document.querySelector("#temp1").textContent = "Temp: " + kelvin2Fahrenheit (data.list [0].main.temp_max) + " ℉";
        document.querySelector("#wind1").textContent = "Wind: " + data.list [0].wind.speed + " MPH";
        document.querySelector("#icon1").src = "http://openweathermap.org/img/wn/" + data.list [0].weather[0].icon + "@2x.png"
        document.querySelector("#humid1").textContent = "Humidity: " + data.list [0].main.humidity + "%";
        // second weather card //
        document.querySelector("#date2").textContent = "Date: " + data.list [8].dt_txt;
        document.querySelector("#temp2").textContent = "Temp: " + kelvin2Fahrenheit (data.list [8].main.temp_max) + " ℉";
        document.querySelector("#wind2").textContent = "Wind: " + data.list [8].wind.speed + " MPH";
        document.querySelector("#icon2").src = "http://openweathermap.org/img/wn/" + data.list [8].weather[0].icon + "@2x.png"
        document.querySelector("#humid2").textContent = "Humidity: " + data.list [8].main.humidity + "%";
        // third weather card //
        document.querySelector("#date3").textContent = "Date: " + data.list [16].dt_txt;
        document.querySelector("#temp3").textContent = "Temp: " + kelvin2Fahrenheit (data.list [16].main.temp_max) + " ℉";
        document.querySelector("#wind3").textContent = "Wind: " + data.list [16].wind.speed + " MPH";
        document.querySelector("#icon3").src = "http://openweathermap.org/img/wn/" + data.list [16].weather[0].icon + "@2x.png"
        document.querySelector("#humid3").textContent = "Humidity: " + data.list [16].main.humidity + "%";
        // fourth weather card //
        document.querySelector("#date4").textContent = "Date: " + data.list [24].dt_txt;
        document.querySelector("#temp4").textContent = "Temp: " + kelvin2Fahrenheit (data.list [24].main.temp_max) + " ℉";
        document.querySelector("#wind4").textContent = "Wind: " + data.list [24].wind.speed + " MPH";
        document.querySelector("#icon4").src = "http://openweathermap.org/img/wn/" + data.list [24].weather[0].icon + "@2x.png"
        document.querySelector("#humid4").textContent = "Humidity: " + data.list [24].main.humidity + "%";
        // fith weather card //
        document.querySelector("#date5").textContent = "Date: " + data.list [32].dt_txt;
        document.querySelector("#temp5").textContent = "Temp: " + kelvin2Fahrenheit (data.list [32].main.temp_max) + " ℉";
        document.querySelector("#wind5").textContent = "Wind: " + data.list [32].wind.speed + " MPH";
        document.querySelector("#icon5").src = "http://openweathermap.org/img/wn/" + data.list [32].weather[0].icon + "@2x.png"
        document.querySelector("#humid5").textContent = "Humidity: " + data.list [32].main.humidity + "%";

    })
}

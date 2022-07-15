//*Declared variables //
var city ="";
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidity = $("#humidity");
var currentWSpeed = $("#wind-speed");
var currentUVIndex = $("#uv-index");
var sCity =[];

function search(c){
    for (var i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}
//* API Key created //
var APIKey = "63db32bd35e5c400f35a54c60bee2876"

function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

function currentWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response) {

        console.log(response)

        var weatherIcon = response.weather[0].icon;
        var iconURL = "https://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png";
        var date = new Date(response.dt*1000).toLocaleDateString();

        $(currentCity).html(response.name ="("+date+")" + "<img src="+iconURL+">")})
    }

window.onload = function dataCapture(){
  var cameraDiv = document.getElementById("camera");
  cameraDiv.innerHTML = '<img src="https://www.w3schools.com/jsref/img_pulpit.jpg" />';
  cameraDiv.width = 320;
  cameraDiv.height = 240;
  //cameraDiv = x; 
  getGPS();
}

function getGPS(){
    var requestString = "http://128.95.66.30:5000";
    alert(requestString);
    request = new XMLHttpRequest();
    request.onload = displayMap;
    console.log("send");
  //alert("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=" + openWeatherMapKey)
    request.open("get", requestString, true);
    request.send();
}

function displayMap(){
  var results = JSON.parse(this.responseText);
  alert(results);
  var gpsDiv = document.getElementById("gps");
  gpsDiv.innerHTML = '<img src="http://maps.googleapis.com/maps/api/staticmap?markers=' +
    results.lat + "," + results.long +
    '&zoom=10&size=300x230&sensor=false" />';
}

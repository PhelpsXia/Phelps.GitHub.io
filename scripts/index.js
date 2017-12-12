<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1404.47">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">window.onload = function dataCapture(){</p>
<p class="p1"><span class="Apple-converted-space">  </span>var cameraDiv = document.getElementById("camera");</p>
<p class="p1"><span class="Apple-converted-space">  </span>cameraDiv.innerHTML = '&lt;img src="https://www.w3schools.com/jsref/img_pulpit.jpg" /&gt;';</p>
<p class="p1"><span class="Apple-converted-space">  </span>cameraDiv.width = 320;</p>
<p class="p1"><span class="Apple-converted-space">  </span>cameraDiv.height = 240;</p>
<p class="p1"><span class="Apple-converted-space">  </span>//cameraDiv = x;<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>getGPS();</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function getGPS(){</p>
<p class="p1"><span class="Apple-converted-space">    </span>var requestString = "http://128.95.66.30:5000";</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert(requestString);</p>
<p class="p1"><span class="Apple-converted-space">    </span>request = new XMLHttpRequest();</p>
<p class="p1"><span class="Apple-converted-space">    </span>request.onload = displayMap;</p>
<p class="p1"><span class="Apple-converted-space">    </span>console.log("send");</p>
<p class="p1"><span class="Apple-converted-space">  </span>//alert("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&amp;lon=" + long + "&amp;APPID=" + openWeatherMapKey)</p>
<p class="p1"><span class="Apple-converted-space">    </span>request.open("get", requestString, true);</p>
<p class="p1"><span class="Apple-converted-space">    </span>request.send();</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function displayMap(){</p>
<p class="p1"><span class="Apple-converted-space">  </span>var results = JSON.parse(this.responseText);</p>
<p class="p1"><span class="Apple-converted-space">  </span>alert(results);</p>
<p class="p1"><span class="Apple-converted-space">  </span>var gpsDiv = document.getElementById("gps");</p>
<p class="p1"><span class="Apple-converted-space">  </span>gpsDiv.innerHTML = '&lt;img src="http://maps.googleapis.com/maps/api/staticmap?markers=' +</p>
<p class="p1"><span class="Apple-converted-space">    </span>results.lat + "," + results.long +</p>
<p class="p1"><span class="Apple-converted-space">    </span>'&amp;zoom=10&amp;size=300x230&amp;sensor=false" /&gt;';</p>
<p class="p1">}</p>
</body>
</html>

const url ='https://api.stormglass.io/v2/weather/point?lat=-33.890842&lng=151.274292&params=waveHeight,wavePeriod&source=noaa';
const hours = new Date().getHours();

fetch(url, {
  headers: {
'Authorization': 'debb66ea-4021-11ed-bd80-0242ac130002-debb6762-4021-11ed-bd80-0242ac130002'
  }
})
.then((response) => response.json())
.then(function(json) {
  let waves = json.hours;
    waveHeight = `${waves[hours + 24].waveHeight.noaa}`
    wavePeriod = `${waves[hours + 24].wavePeriod.noaa}`
    document.getElementById("waveHeight").innerHTML = waveHeight;
    document.getElementById("wavePeriod").innerHTML = wavePeriod;
    
    if (waveHeight > 1 & wavePeriod > 10) {
    	document.getElementById("Rating").innerHTML = `👍`;
	document.getElementById("myVideo").src = "img/bali.mp4"
    } else {
   	document.getElementById("Rating").innerHTML = `🤬`;
   	document.getElementById("myVideo").src = "img/bali_low.mp4";
		}
  console.log(waves);
})
.catch(function(error) {
  console.log(error);
});





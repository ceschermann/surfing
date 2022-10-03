const url ='https://api.stormglass.io/v2/weather/point?lat=-33.890842&lng=151.274292&params=waveHeight,wavePeriod&source=noaa';


fetch(url, {
  headers: {
'Authorization': 'debb66ea-4021-11ed-bd80-0242ac130002-debb6762-4021-11ed-bd80-0242ac130002'
  }
})
.then((response) => response.json())
.then(function(json) {
  let waves = json.hours;
    waveHeight = `${waves[23].waveHeight.noaa}`
    wavePeriod = `${waves[23].wavePeriod.noaa}`
    document.getElementById("waveHeight").innerHTML = waveHeight;
    document.getElementById("wavePeriod").innerHTML = wavePeriod;
    
    if (waveHeight > 1 & wavePeriod > 10) {
    document.getElementById("Rating").innerHTML = `👍`;
    } else {
    document.getElementById("Rating").innerHTML = `🤬`;
    document.getElementById("myVideo").src = "https://joy.videvo.net/videvo_files/video/free/2018-01/large_watermarked/171124_E1_HD_012_preview.mp4";
		}
  console.log(waves);
})
.catch(function(error) {
  console.log(error);
});





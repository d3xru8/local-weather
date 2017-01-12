$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("https://api.apixu.com/v1/current.json?key=c88b615011b243ebabf162239171201&q="+position.coords.latitude+","+position.coords.longitude,function(json){
        $(".weather").html(JSON.stringify(json));
      });
    });
  }
});

$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("https://api.apixu.com/v1/current.json?key=c88b615011b243ebabf162239171201&q="+position.coords.latitude+","+position.coords.longitude,function(json){
        var today = new Date(json.location.localtime_epoch);
        $(".name").html(json.location.name);
        $(".country").html(json.location.country);
        $(".time").html(today.toDateString());
        $(".icon").attr("src",json.current.condition.icon);
        $(".condition").html(json.current.condition.text);
        $(".temp").html(JSON.stringify(json.location));
      });
    });
  }
});

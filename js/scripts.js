$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("https://api.apixu.com/v1/current.json?key=c88b615011b243ebabf162239171201&q="+position.coords.latitude+","+position.coords.longitude,function(json){
        $(".name").html(json.location.name);
        $(".country").html(json.location.country);
        $(".time").html(json.location.localtime);
        $(".icon").attr("src",json.current.condition.icon);
        $(".condition").html(JSON.stringify(json.current.condition.text));
      });
    });
  }
});

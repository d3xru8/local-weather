$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("https://api.apixu.com/v1/current.json?key=c88b615011b243ebabf162239171201&q="+position.coords.latitude+","+position.coords.longitude,function(json){
        console.log(json.current);
        var temp_c = json.current.temp_c;
        var temp_f = json.current.temp_f;
        $(".name").html(json.location.name);
        $(".country").html(json.location.country);
        $(".time").html(json.location.localtime);
        $(".icon").attr("src",json.current.condition.icon);
        $(".condition").html(json.current.condition.text);
        $(".temp").html(temp_c + "&deg;");
      });
    });
  }
});

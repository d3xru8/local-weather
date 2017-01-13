$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("https://api.apixu.com/v1/current.json?key=c88b615011b243ebabf162239171201&q="+position.coords.latitude+","+position.coords.longitude,function(json){
        var data = JSON.parse(json);
        $(".name").html(data.location.name);
        $(".country").html(data.location.country);
        $(".time").html(data.location.localtime);
        $(".icon").attr("src","http:"+data.current.condition.icon);
        $(".condition").html(JSON.stringify(data.current.condition.text));
        $(".weather").html(JSON.stringify(data.current.condition.text));
      });
    });
  }
});

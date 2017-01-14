$(document).ready(function() {
  var temp_c = 0;
  var temp_f = 0;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON("https://api.apixu.com/v1/current.json?key=c88b615011b243ebabf162239171201&q="+position.coords.latitude+","+position.coords.longitude,function(json){
        console.log(json.current);
        temp_c = json.current.temp_c;
        temp_f = json.current.temp_f;
        $(".name").html(json.location.name);
        $(".country").html(json.location.country);
        $(".time").html(json.location.localtime);
        $(".icon").attr("src",json.current.condition.icon);
        $(".condition").html(json.current.condition.text);
        $(".temp").html(temp_c + "&deg;");
        $(".temp_c").show();
      });
    });
  }
  $(".temp_c").click(function(){
    $(".temp").html(temp_f + "&deg;");
    $(".temp_c").hide();
    $(".temp_f").show();
  });
  $(".temp_f").click(function(){
    $(".temp").html(temp_c + "&deg;");
    $(".temp_f").hide();
    $(".temp_c").show();
  });
});

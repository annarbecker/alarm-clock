$(document).ready(function(){
  $('#time').text(startTime());
});

function startTime() {
  var time = moment().format('h:mm:ss a');
  document.getElementById("time").innerHTML = time;
  if (time === alarmTime) {
    $("#alarm-ring").show();
  } else {
    $("#alarm-ring").hide();
  }
  setTimeout(startTime, 500);
}

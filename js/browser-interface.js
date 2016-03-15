var alarmTime;

$(document).ready(function() {
  $('#set-alarm').submit(function(event) {
    event.preventDefault();
    alarmTime = moment(($('#alarmTime').val()), "H:mm").format("h:mm:ss a");
    $('#alarm-input').append("<h3>" + alarmTime + "</h3>");
  });
});

var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentTime')
    update();
    setInterval(update, 1000);
});



$(document).ready (function () {
    $("*[data-store]").each(function () {
      $(this).val(localStorage.getItem("event" + $(this).attr("data-store")));
    });
  
    $("*[data-store]").on("keyup", function (itm) {
      localStorage.setItem ("event" + $(this).attr("data-store"), $(this).val());
    })
    $( "#savebtn" ).click(function() {
        localStorage.removeItem("event" + $("*[data-store]").attr("data-store"), $("*[data-store]").val())
      });
  })

  
 



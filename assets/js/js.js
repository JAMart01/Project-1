console.log("js.js linked");

var closeW = document.getElementById("noBtn");



closeW.addEventListener("click", function(e){
    e.preventDefault();
    countdown_init();

});



var countdown;
var countdown_number;
   
    function countdown_init() {
        countdown_number = 6;
        countdown_trigger();
    }
   
    function countdown_trigger() {
        if (countdown_number > 0) {
            countdown_number--;
   
            document.getElementById('countdown').innerHTML = "Time: " + countdown_number;
   
            if(countdown_number > 0) {
                countdown = setTimeout('countdown_trigger()', 1000);
            }else{
                window.location.href = "thanks.html";
            }
        }
    }













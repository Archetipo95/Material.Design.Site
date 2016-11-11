(function($){
  $(function(){

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function () {
    Materialize.toast('Swipe right to open menu', 2000);
    setInterval(function(){document.getElementById("toast-container").style.display = 'none';},2000);

});

var options = [
    {selector: '#image-test', offset: 1000, callback: function(el) {
      Materialize.fadeInImage($(el));
    } }
  ];
  Materialize.scrollFire(options);

  AOS.init({
				easing: 'ease-out-back',
				duration: 1000
			});

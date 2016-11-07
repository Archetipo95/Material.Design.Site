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
    Materialize.toast('Swipe right to open menu', 3000);
});

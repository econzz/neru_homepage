// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks

//= require ./custom/easing.js
//= require ./custom/move-top.js


addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }



jQuery(document).ready(function($) {
  $(".scroll").click(function(event){		
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
  });
});

$(document).ready(function() {
  /*
  var defaults = {
      containerID: 'toTop', // fading element id
      containerHoverID: 'toTopHover', // fading element hover id
      scrollSpeed: 1200,
      easingType: 'linear' 
  };
  */
  
  $().UItoTop({ easingType: 'easeOutQuart' });
  
});
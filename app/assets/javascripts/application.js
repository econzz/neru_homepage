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

//= require ./custom/lightbox-plus-jquery.min.js
//= require ./custom/jquery.gauge.js
//= require ./custom/modernizr-2.6.2.min.js
//= require ./custom/jquery.fatNav.js
//= require ./custom/jquery.flexslider.js
//= require ./custom/SmoothScroll.min.js

$(document).on('turbolinks:load',function(){ 
  
  $("#gauge1").gauge(90,{color: "#ff4f81",unit: " %",type: "halfcircle"});
  $("#gauge2").gauge(70, {color: "#2dde98", unit: " %",type: "halfcircle"});
  $("#gauge3").gauge(75, {color: "#00aeff",unit: " %",type: "halfcircle"});
  $("#gauge4").gauge(40, {color: "#ffb900",unit: " %",type: "halfcircle"});

  $.fatNav();
});




$(window).load(function(){
  $('.flexslider').flexslider({
  animation: "slide",
  start: function(slider){
    $('body').removeClass('loading');
  }
  });
});

	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});



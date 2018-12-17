(function($){

  $(".animatie-menu").mousedown(function(){
  	$(this).toggleClass("animatie-menu-closed");

  	if($(this).hasClass("animatie-menu-closed")) {
  		$(".main.button-effect").text("Home");
  	} else {
  		$(".main.button-effect").text("Close");
  	}
  })

})(jQuery);

$(document).ready(function () {
	
	
	$(".lui_accordion").each(function () {
		if($(this).hasClass("sortable")){
			$(this).accordion({
				header: "> div > .header"
			}).sortable({
				axis: "y",
				handle: ".header",
				stop: function( event, ui ) {
					// IE doesn't register the blur when sorting
					// so trigger focusout handlers to remove .ui-state-focus
					ui.item.children(".header").triggerHandler("focusout");

					// Refresh accordion to handle new order
					$( this ).accordion( "refresh" );
				}
			});
		}
		else {
			$(this).accordion();
		}
	});
});

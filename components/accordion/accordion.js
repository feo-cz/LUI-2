$(document).ready(function () {
	$(".lui_accordion").each(function () {
		if($(this).hasClass("sortable")){
			$(this).accordion({
				header: "> div > .header"
			}).sortable({
				axis: "y",
				handle: ".header",
				stop: function( event, ui ) {
					ui.item.children(".header").triggerHandler("focusout");
					$(this).accordion("refresh");
				}
			});
		}
		else {
			$(this).accordion();
		}
	});
});

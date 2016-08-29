$(document).ready(function () {
	
	// JQUERY UI SELECT
	$("select.make_lui_select").each(function () {
		$(this).parent().append('<div class="ui-js-dropdown"><div class="inside"></div></div>');
		var dropdown = $(this).siblings(".ui-js-dropdown").children(".inside");
		$(this).selectmenu({appendTo: dropdown});
	});

	// FORM PREFIX / POSTFIX
	/*$(window).load(function () {
		function prefix_calc() {
			$(".lui_form .item .value.prefix input").each(function () {
				var prefix_element = $(this).siblings(".lui_prefix").outerWidth(true);
				var prefix_width = $(this).parent().width() - prefix_element;
				$(this).css('width', prefix_width).css('margin-left', prefix_element);
			})
		};

		function postfix_calc() {
			$(".lui_form .item .value.postfix input").each(function () {
				var postfix_element = $(this).siblings(".lui_postfix").outerWidth(true);
				var postfix_width = $(this).parent().width() - postfix_element;
				$(this).css('width', postfix_width);
			})
		};

		prefix_calc();
		postfix_calc();
		$(window).resize(function () {
			setTimeout(
				function () {
					prefix_calc();
					postfix_calc();
				}, 450);
		});
	});*/
});

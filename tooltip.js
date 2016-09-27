//github.com/coax/simple-tooltips 0.1
$.fn.tooltip = function() {
	$(this).on({
		mouseenter: function(a) {
			content = $(this).attr('title'); //read title attribute
			tooltip = $('<div class="tooltip"></div>'); //create container
			if(!content || content=='') return false; //disable if no content in title attribute
			$(this).removeAttr('title'); //remove content from attribute
			tooltip.css('display','none').html(content).appendTo('body'); //insert container in DOM but hide it

			var cursor_x = a.pageX; //cursor X position
			var cursor_y = a.pageY; //cursor Y position
			var tooltip_width = tooltip.outerWidth(); //tooltip container width
			var tooltip_height = tooltip.outerHeight(); //tooltip container height
			var position_left = cursor_x - (tooltip_width/2); //center tooltip container above cursor
			position_top = cursor_y - tooltip_height - 15; //move 15px higher
			if (position_left + tooltip_width > $(window).width()) { //if outside right window boder
				position_left = cursor_x - tooltip_width;
			}
			if (position_left < 0) { //if outside left window border
				position_left = cursor_x;
			}
			if (cursor_y - tooltip_height - 15 < $(window).scrollTop()) { //if above top window border
				position_top =  cursor_y + 15;
			}
			offset_x = position_left - cursor_x; //create offsets
			offset_y = position_top - cursor_y;

			tooltip.css({top:position_top+"px", left:position_left+"px"}).fadeIn(100); //show tooltip
		},
		mousemove: function(a) {
			tooltip.css({top:a.pageY+offset_y+'px', left:a.pageX+offset_x+"px"}); //move tooltip
		},
		mouseleave: function(a) {
			$(this).attr('title', content); //return content to attribute
			tooltip.stop().fadeOut(50, function() { $(this).remove(); }); //hide tooltip
			tooltip = ''; //destroy container
		}
	});
};

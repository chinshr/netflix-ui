var PS3 = {
	move: {
		enter: function (){
			$('.sidebar').toggleClass('on');
		},
		left: function (){
			$('.viewport ul').data("jcarousel").first().scroll(8);
		},
		right: function (){
			$('.viewport ul').data("jcarousel").first().scroll(8);
		}
	}
}

$( function (){
	// DOM READY
	
	$('.ui-main').css({
		// height: $(window).height()
	});
	
	$(document).bind( 'keydown', function (e){
		e.preventDefault();
		var i="";
		switch(e.keyCode){
			case 39:
				i="left";
			break;
			case 37:
				i="right";
			break;
			case 38:
				i="up";
			break;
			case 40:
				i="down";
			break;
			case 13:
				i="enter";
			break;
			default: console.log(e.keyCode);
		}
		console.log(i);
		if (i!="") PS3.move[i]();
	});
	
});
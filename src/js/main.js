//=require components/**.*


$(function() {
	menuShow();


	$('.intro-list').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false
	});

	$('.features-items').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false
	});
	
	$('.team-people').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false
	});

	filter();
})
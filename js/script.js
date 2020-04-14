
$(document).ready(function() {
	$('.top__burger').click(function(event) {
		$('.top__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 6,
		infinite: true,
		slidesToScroll: 2,
		adaptiveHeight: true,
		speed:500,
		waitForAnimate: true,
		dots: true,
		responsive: [
  		{
   	 	breakpoint: 990, // tablet breakpoint
   	   settings: {
   	     slidesToShow: 4,
   	     slidesToScroll: 2,
   	   }
   	 },
   	 {
   	 	breakpoint: 675, // mobile breakpoint
   	   settings: {
   	     slidesToShow: 3,
   	     slidesToScroll: 2,
   	   }
   	 },
   	 {
   	 	breakpoint: 475, // mobile breakpoint
   	   settings: {
   	     slidesToShow: 2,
   	     slidesToScroll: 1,
   	   }
   	 }
  	]	
	});
});

$('.filter__item').click(function(event){
		var i=$(this).data('filter');
		if (i==1) {
			$('.portfolio__item').show();
		}else{
			$('.portfolio__item').hide();
			$('.portfolio__item.f_'+i).show();
		}
		$('.filter__item').removeClass('active');
		$(this).addClass('active');
	return false;
});

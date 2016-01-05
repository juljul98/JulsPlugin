//Dynamic Slider by: Julius DS. Mateo  12/15
$(window).load(function(){
	startSlide();
	var slideWidth = $('.imageSlider li').width(); // get the width of an li
	var slideCount = $('.imageSlider li').length; // get how many li we have in image slider
	var sliderProd = slideCount * slideWidth + 'px'; // total width of the slider
	$('.imageSlider').css({ width: sliderProd }); // set the width of image slider
	// Automatic Start Slide on Load
	function startSlide(){
		myVar = setInterval(function(){ next() }, 2000);
	}
	// Disable Auto Start Slide When mouseover in this element
	$('.sliderArea, .next a, .prev a, .paginationCircle').hover(function(){
		clearInterval(myVar);
	}, function(){
		startSlide();
	});
	// Slide Animate on Function to minify the codes
	function slide(val){
		$('.imageSlider').animate({
			left: val
		}, 200);
	}
	pagination();
	slidePaginate($('.imageSlider li.current').index()); // get the current index of slider
	slide(-($('.imageSlider li.current').index() * slideWidth)); //Animate Slide Function where current is at
	//Function for Next
	function next() {
		if($('.imageSlider li.current').is(':last-child')) {
			$('.imageSlider li:first-child').addClass('current').siblings().removeClass('current');
			slide(0)//Animate Slide Function
		} else {
			$('.imageSlider li.current').removeClass('current').next().addClass('current');
			slide(parseInt($('.imageSlider').css('left')) - slideWidth)//Animate Slide Function
		}
		slidePaginate($('.imageSlider li.current').index());//get the next index of slider
	}
	// Function for Previous
	function prev() {
		var slidePrev = slideWidth - parseInt(sliderProd);
		if($('.imageSlider li.current').is(':first-child')) {
			$('.imageSlider li:last-child').addClass('current').siblings().removeClass('current');
			slide(slidePrev + 'px');//Animate Slide Function
		} else {
			$('.imageSlider li.current').removeClass('current').prev().addClass('current');
			slide(parseInt($('.imageSlider').css('left')) + slideWidth);//Animate Slide Function
		}
		slidePaginate($('.imageSlider li.current').index());// Get the prev index of slider
	}
	// add class to the pagination base on index
	function slidePaginate(index){
		$('.paginationCircle li').eq(index).find('a').addClass('activeP').parent().siblings().find('a').removeClass('activeP');
	}
	// looped li append to ul
	function pagination() {
		var i = 0;
		var y = '';
		for(i=0; i<slideCount; i++){
			y += '<li class="paginate"><a href="#"></a></li>';
		}
		$('.paginationCircle').append(y);
	}
	// Click paginate to slide in image
	function clickPaginate(el) {
		var click = ($(el).parent('li').index());
		slide(-(click * slideWidth));//Animate Slide Function
		$('.imageSlider li').eq(click).addClass('current').siblings().removeClass('current');
		$(el).addClass('activeP').parent().siblings().find('a').removeClass('activeP');
	}
	// Click functions
	$('.prev a').click(function (e) {
		e.preventDefault();
		prev();
	});
	$('.next a').click(function (e) {
		e.preventDefault();
		next();
	});
	$('.paginationCircle .paginate a').click(function (e) {
		e.preventDefault();
		clickPaginate(this);
	});
	
	// Clear History JS
	$('.rcntlyChckErase a').click(function(e){
		e.preventDefault();
		$('.rcntlyChckImgHolder, .rcntlyChckBlock').fadeOut(100);
	});
	//PageTop
	$('.pageTop a').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : 0
		}, 400);
	});
	// Height for all Products
	var maxHeight = Math.max.apply(null, $(".productContainer").map(function (){
		return $(this).height();
	}).get());
	$('.productContainer').css('height', maxHeight + 'px');
	//Detail Page Banner(hover) animation
	var x = $('.bannerLRHolder li.active').find('img').attr('src').replace('_tmb', '_hov');
	$('.bannerRight img').attr('src', x);
	$('.bannerLRHolder li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var x = $('.bannerLRHolder li.active').find('img').attr('src').replace('_tmb', '_hov');
		$('.bannerRight img').attr('src', x);
	});
	// hover Effect
	$('.blk01Button01 a img, .blk03Button01 a img')
	.mouseover(function(){
		this.src = this.src.replace('_off', '_on');
	}).mouseleave(function(){
		this.src = this.src.replace('_on', '_off');
	})
});
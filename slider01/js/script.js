$(window).load(function(){
     var slideCount = $('.imageSlider li').length;
        function pagination() {
		var i = 0;
		var y = '';
		for(i=0; i<slideCount; i++){
			y += '<li><a href="#"></a></li>';
		}
		  $('.pagination').append(y);
	    }
     pagination();
   slidePaginate($('.imageSlider li.active').index());
   
    function next(){
        if ($('.imageSlider li.active').is(':last-child')){
            $('.imageSlider li:first-child').fadeIn('slow').addClass('active').siblings().removeClass('active').hide();
              slidePaginate($('.imageSlider li.active').index());
            
        } else {
           $('.imageSlider li.active').next().fadeIn('slow').addClass('active').siblings().removeClass('active').hide(); 
              slidePaginate($('.imageSlider li.active').index());
        }
    }
    function prev(){
         if ($('.imageSlider li.active').is(':first-child')){
            $('.imageSlider li:last-child').fadeIn('slow').addClass('active').siblings().removeClass('active').hide();
               slidePaginate($('.imageSlider li.active').index());
            
        } else {
           $('.imageSlider li.active').prev().fadeIn('slow').addClass('active').siblings().removeClass('active').hide(); 
              slidePaginate($('.imageSlider li.active').index());
        }
    }
   function slidePaginate(index){
		$('.pagination li').eq(index).addClass('active').siblings().removeClass('active');
	}
     $('.next a').click(function(e){
         e.preventDefault();
        next();   
    });
     $('.prev a').click(function(e){
         e.preventDefault();
        prev();   
    });
    $('.pagination li a').click(function(e){
        e.preventDefault();
        var x = $(this).parent('li').index();
        $('.pagination li').eq(x).addClass('active').siblings().removeClass('active');
        $('.imageSlider li').eq(x).fadeIn('slow').addClass('active').siblings().removeClass('active').hide();
    });
});
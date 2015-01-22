$(document).ready(function() {
			
	var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 1200,
		easingType: 'linear' 
		 		};
	
	
	$().UItoTop({ easingType: 'easeOutQuart' });

	$('.nav li').click(function(){
		$('.nav li').removeClass("active");
		$(this).addClass("active");
	});

	$('#category1').click(function(){
		$('.categories').css('top','0px');
		$('.category_item').hide();
		$('.category1').show();
		$('.category_item').removeClass('fourth');
		$('.category1:nth-child(13n)').addClass('fourth');
		$('.nav-wrap div').addClass('disable');
		$('.nav-wrap div:first-child').removeClass('disable');
		$('.select-packet li').removeClass('active');
		$(this).addClass('active');
	});
	
	$('#category2').click(function(){
		$('.categories').css('top','0px');
		$('.category_item').hide();
		$('.category2').show();
		$('.category_item').removeClass('fourth');
		$('.category2:nth-child(14n)').addClass('fourth');
		$('.nav-wrap div').addClass('disable');
		$('.nav-wrap div:first-child').removeClass('disable');
		$('.select-packet li').removeClass('active');
		$(this).addClass('active');
	});
	$('#category3').click(function(){
		$('.categories').css('top','0px');
		$('.category_item').hide();
		$('.category3').show();
		$('.category_item').removeClass('fourth');
		$('.category3:nth-child(15n)').addClass('fourth');
		$('.nav-wrap div').addClass('disable');
		$('.nav-wrap div:first-child').removeClass('disable');
		$('.select-packet li').removeClass('active');
		$(this).addClass('active');
	});
	$('#category4').click(function(){
		$('.categories').css('top','0px');
		$('.category_item').hide();
		$('.category4').show();
		$('.category_item').removeClass('fourth');
		$('.category4:nth-child(16n)').addClass('fourth');
		$('.nav-wrap div').addClass('disable');
		$('.nav-wrap div:first-child').removeClass('disable');
		$('.select-packet li').removeClass('active');
		$(this).addClass('active');
	});$('.categories').css('top','0px');

	$('#category0').click(function(){
		$('.category_item').show();
		$('.category_item').removeClass('fourth');
		$('.category_item:nth-child(4n+4)').addClass('fourth');
		$('.nav-wrap div').removeClass('disable');
		$('.select-packet li').removeClass('active');
		$(this).addClass('active');
	});
	$('#nav1').click(function(){
		$('.categories').css('top','0px');
		$('#nav0').removeClass('disable');
	});
	$('#nav2').click(function(){
		$('.categories').css('top','-1084px');
		$('#nav0').removeClass('disable');
	});
	$('#nav3').click(function(){
		$('.categories').css('top','-2168px');
		$('#nav0').addClass('disable');
	});
	$('#nav0').click(function(){
		if(parseInt($('.categories').css('top'))!=-2168) {
			if(parseInt($('.categories').css('top'))==-1084){
				$(this).addClass('disable');
				var top = parseInt($('.categories').css('top')) - 1084;
				$('.categories').css('top', top);
			} else {
				var top = parseInt($('.categories').css('top')) - 1084;
				$('.categories').css('top', top);
			}
		}
		
	});
});

$(window).scroll(function(){
	if ($(window).scrollTop()>($(window).height()/25)){
		$(".top-menu_wrap, .header-shadow").addClass("stickly transition");
		$(".index-banner").css('padding-top', '7%');
	} else {
		$(".top-menu_wrap, .header-shadow").removeClass("stickly");
		$(".index-banner").css('padding-top', '0');
	}
});
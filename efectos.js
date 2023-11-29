$(document).ready(function(){

// EFECTO MENU
	$('.menu a').each(function(index,elemento){
		$(this).css({
			'top':'-200px'
		});

		$(this).animate({
			top:'0'
		},2000 + (index * 500));
	});

//EFECTO HEADER
	if($(window).width()>800){
		$('header .textos').css({
			opacity:0,
			marginTop:0
		});

		$('header .textos').animate({
			opacity:1,
			marginTop:'-52px'
		},1500);
	}

//SCROLL ELEMENTOS MENU
	var queEs = $('#que-es').offset().top,
		mitos = $('#mitos').offset().top,
		consecuencias = $('#consecuencias').offset().top,
		galeria = $('#galeria').offset().top;

	$('#btn-que-es').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: queEs - 100
		},500);
	});

	$('#btn-mitos').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: mitos
		},500);
	});

	$('#btn-consecuencias').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: consecuencias
		},500);
	});

	$('#btn-galeria').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: galeria
		},500);
	});
});
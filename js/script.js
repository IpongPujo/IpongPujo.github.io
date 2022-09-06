// event pada saat link diklik
$('.page-scroll').on('click', function(){

	// ambil ini href
	var tujuan = $(this).attr('href');
	// tangkep elemen ybs
	var elemenTujuan = $(tujuan);

	// pindah scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});


// paralax

// about
$(window).on('load', function() {
	$('.pkiri').addClass('pmuncul')
	$('.pkanan').addClass('pmuncul')
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'traslate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'traslate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'traslate(0px, '+ wScroll/1.2 +'%)'
	});


	// pertfolio
	if( wScroll > $('.portfolio').offset().top - 250 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
				console.log('ok')
			}, 300 * (i+1));
		});
	}
});




// modified

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("#isiContent");
//   // let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   // for (i = 0; i < dots.length; i++) {
//   //   dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   slides[slideIndex-1].style.display = "block";  
//   // dots[slideIndex-1].className += " active";
// }

// akhir modified
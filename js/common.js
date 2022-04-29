$(document).ready(function() {

	//main slider
	if ($(".main-slider").length > 0) {
		var swiper = new Swiper('.main-slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 1,
			spaceBetween: 30,
			// effect: 'fade', // анимация
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
			// autoplay: {
		 //        delay: 2500,
		 //        disableOnInteraction: false,
	  //     	},
	      	navigation: {
		        nextEl: '.main-slider-next',
		        prevEl: '.main-slider-prev',
	      	},
		    pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		        // type: 'progressbar', //прогрессивная полоса
		    },
		    breakpoints: {
		        100: {
		          slidesPerView: 1,
		        },
		        768: {
		          slidesPerView: 1,
		        },
		        640: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}


	// drom menu
	$(".list-main-nav > li").each(function(indx, element){
		  if($(this).find("ul").is("ul")){
			$(this).addClass('toggle-link');
		}
	});



	// drop first
	$(".toggle-link .toggle-link-first").on('click', function(e) {
        e.preventDefault();
        if (window.matchMedia('(max-width: 1000px)').matches) {

			if($(this).next("div").is(":visible")){
	            $(this).next("div").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).removeClass("active");

	        } else {
	            $(".drop-list").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).next("div").slideDown(200);
	            $(this).parents().siblings().find(".toggle-link .toggle-link-first").removeClass("active");
	            $(this).addClass("active");


	        }
        }
    });


	// drop second
	$(".item-drop-list b").on('click', function(e) {
        e.preventDefault();
        if (window.matchMedia('(max-width: 1000px)').matches) {

			if($(this).next("ul").is(":visible")){
	            $(this).next("ul").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).removeClass("active");

	        } else {
	            $(".list-drop").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).next("ul").slideDown(200);
	            $(this).parents().siblings().find(".item-drop-list b").removeClass("active");
	            $(this).addClass("active");


	        }
        }
    });

    // Скрыть - раскрыть блок
	$('.menuToggle').on('click', function() {
       $('.menu-nav').addClass('active');
       $('body').addClass('none-scroll');
    });
    $('.close-menu-js').on('click', function() {
       $('.menu-nav').removeClass('active');
       $('body').removeClass('none-scroll');
    });


     // desk toggle
	$('.mini-menuToggle').on('click', function() {
       $('.second-menu-nav-block').addClass('active');
       $('body').addClass('none-scroll');
    });
    $('.close-menu-second').on('click', function() {
       $('.second-menu-nav-block').removeClass('active');
       $('body').removeClass('none-scroll');
    });



    // footer drop
	$(".item-footer-nav b").on('click', function(e) {
        e.preventDefault();
        if (window.matchMedia('(max-width: 1000px)').matches) {

			if($(this).next("div").is(":visible")){
	            $(this).next("div").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).removeClass("active");

	        } else {
	            $(".list-drop-footer").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).next("div").slideDown(200);
	            $(this).parents().siblings().find(".item-footer-nav b").removeClass("active");
	            $(this).addClass("active");

	        }
        }
    });

	//btn top
    $('#to-top').click(function() {
      $('body,html').animate({scrollTop:0},500);
    });


    //parallax big text
    var rellax = new Rellax('.box1', {
    	horizontal: true
    });


    // form-search
    $('.loop').on('click', function(e) {
    	e.preventDefault();
    	$('.search-all-block').slideDown(200).addClass('active');
    });

    $('.close-search-js').on('click', function() {
    	$('.search-all-block').slideUp(200).removeClass('active');
    });


    // drop section product
	$(".nav-faq-drop").on('click', function(e) {
        e.preventDefault();
        if (window.matchMedia('(max-width: 1000px)').matches) {

			if($(this).next("ul").is(":visible")){
	            $(this).next("ul").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).removeClass("active");

	        } else {
	            $(".list-nav-faq").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).next("ul").slideDown(200);
	            $(this).parents().siblings().find(".nav-faq-drop").removeClass("active");
	            $(this).addClass("active");

	        }
        }
    });



    // drop lk nav
	$(".nav-lk-drop").on('click', function(e) {
        e.preventDefault();
        if (window.matchMedia('(max-width: 1000px)').matches) {

			if($(this).next("ul").is(":visible")){
	            $(this).next("ul").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).removeClass("active");

	        } else {
	            $(".nav-lk").slideUp(200, function(){
		            if( $(this).css('display') === "none"){
		                $(this).removeAttr('style');
		            }

       			});
	            $(this).next("ul").slideDown(200);
	            $(this).parents().siblings().find(".nav-lk-drop").removeClass("active");
	            $(this).addClass("active");

	        }
        }
    });


    // basket accord
	$(".open-basket-info-block").on('click', function(e) {
        e.preventDefault();
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp(200);
            $(this).removeClass("active");

        } else {
            $(".toggle-basket-info-block").slideUp(200);
            $(this).next("div").slideDown(200);
            $(this).parents().siblings().children(".open-basket-info-block").removeClass("active");
            $(this).addClass("active");
        }
    });



	// basket quantity
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    // typhoon slider
    if ($(".typhoon-slider").length > 0) {
		var swiper = new Swiper('.typhoon-slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 1,
			// centeredSlides:	true,
			spaceBetween: 0,
			// effect: 'fade', // анимация
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
			pagination: {
				el: '.typhoon-slider-pagination',
				type: 'fraction',
			},
		    breakpoints: {
		        1000: {
		          slidesPerView: 1,
		          pagination: {
		          	el: '.typhoon-slider-pagination',
		          	type: 'bullets',
		          	clickable: true,
		          },
		        },
		        768: {
		          slidesPerView: 1,
		          pagination: {
		          	el: '.typhoon-slider-pagination',
		          	type: 'bullets',
		          	clickable: true,
		          },
		        },
		        640: {
		          slidesPerView: 1,
		          pagination: {
		          	el: '.typhoon-slider-pagination',
		          	type: 'bullets',
		          	clickable: true,
		          },
		        }
	      	}
	    });
	}


	//селект
        $('.selectmenu-size').each(function(){
		// Variables
		var $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 300;

		var option = $(this).find('option:first-child').text();


		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="select"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: option,
		}).insertAfter($this);

		var selectGap = $this.next('.select__gap'),
			caret = selectGap.find('.caret');
		// Add ul list
		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);

		var selectList = selectGap.next('.select__list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$('.select__gap').removeClass('on');
				$('.select__list').slideUp(dur);
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');
					$(this).siblings().removeClass('active');
					$(this).addClass('active');
					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());

					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});
	});

	$(document).mouseup(function (e){
		var div = $(".select");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.select__gap').removeClass('on');
			$('.select__list').slideUp(300);
		}
	});


	// tabs one cards
  	$('ul.list-score a').click(function(e) {
        e.preventDefault();
        $('ul.list-score .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.card-one-availability-info').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });


    // accord one cards
	$(".drop-dop-info-card").on('click', function(e) {
        e.preventDefault();
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp(200);
            $(this).removeClass("active");

        } else {
            $(".open-dop-info-card").slideUp(200);
            $(this).next("div").slideDown(200);
            $(this).parents().siblings().children(".drop-dop-info-card").removeClass("active");
            $(this).addClass("active");
        }
    });


	// slider card mob
    if ($(".slider-card").length > 0) {
		const breakpoint = window.matchMedia( '(min-width:1000px)' );
		 let mySwiper;

		  const breakpointChecker = function() {

		    if ( breakpoint.matches === true ) {

			  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

			  return;

		      } else if ( breakpoint.matches === false ) {

		        return enableSwiper();
		      }
		  };
		  const enableSwiper = function() {
		    mySwiper = new Swiper ('.slider-card', {
		        slidesPerView: 1,
				spaceBetween: 20,
				loop: false,
				slidesPerGroup: 1,
				watchOverflow: true,
				pagination: {
		          	el: '.card-one-slider-pagination',
		          	type: 'bullets',
		          	clickable: true,
		          },
		    });
		  };

		  breakpoint.addListener(breakpointChecker);
		  breakpointChecker();
	}



	// slider card desktop
	if (window.matchMedia('(min-width: 1000px)').matches) {

  //down
  $('.trigg-slide').waypoint(function(direction) {
  	if (direction === 'down') {
  		// $('.slider-card-mini-block').addClass('sticky');
  		// $('.item-card-one-info-block').addClass('sticky');

  		$('.item-slider-card-mini a').removeClass('selected');
  		var selector = ".item-slider-card-mini a[href='#" + this.element.id + "']";
  		$(selector).addClass('selected');
  	}
  },
  {
  	offset: '0'
  });

	//up
	$('.trigg-slide').waypoint(function(direction) {
		if (direction === 'up') {
		// $('.slider-card-mini-block').removeClass('sticky');
		// $('.item-card-one-info-block').addClass('sticky');

			$('.item-slider-card-mini a').removeClass('selected');
			var selector = ".item-slider-card-mini a[href='#" + this.element.id + "']";
			$(selector).addClass('selected');
		}
	}, 	{
		offset: '0'
	});

	}






    // tabs maps
    $('.item-contacts-maps-office a').click(function(e) {
    	e.preventDefault();
    	$('.item-contacts-maps-office .active').removeClass('active');
    	$(this).addClass('active');
    	var tab = $(this).attr('href');
    	$('.item-contacts-maps').not(tab).css({'display':'none'});
    	$(tab).fadeIn(400);
    });



    // accord filter
    $(".btn-filter").on('click', function(e) {
        e.preventDefault();
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp(200);
            $(this).removeClass("active");

        } else {
            $(this).next("div").slideDown(200);
            $(this).parents().siblings().children(".btn-filter").removeClass("active");
            $(this).addClass("active");
        }
    });


    // filter price
    $('#rangeslider').slider({
        values: [2990, 279990],
        min: 0,
	    max: 300000,
        range: true,
        create: setInputsFrom2Slider,
        slide: setInputsFrom2Slider,
        stop: setInputsFrom2Slider
    });

    function setInputsFrom2Slider() {
        $('#rangeMin').val($('#rangeslider').slider("values", 0));
        $('#rangeMax').val($('#rangeslider').slider("values", 1));
    }

    $('.min_max input').keyup(function(e) {
        switch (this.id) {
            case "rangeMin":
            case "rangeMax":
                var index = (this.id == "rangeMax") ? 1 : 0;
                $('#rangeslider').slider("values", index, $(this).val())
                break;
        }
    });



    // sort
    $(".sort-drop").on('click', function(e) {
        e.preventDefault();
        if($(this).next("ul").is(":visible")){
            $(this).next("ul").slideUp(200);
            $(this).removeClass("active");

        } else {
            $(this).next("ul").slideDown(200);
            $(this).parents().siblings().children(".sort-drop").removeClass("active");
            $(this).addClass("active");
        }
    });



    // filter-open
	$('.filter-mob').on('click', function(e) {
        e.preventDefault();
       $('.category-filter-block').addClass('active');
    });

    $('.close-filter-js').on('click', function() {
       $('.category-filter-block').removeClass('active');
    });


    // sort-open
	$('.sort-mob').on('click', function(e) {
        e.preventDefault();
       $('.sort-category-block').addClass('active');
    });

    $('.close-sort-js').on('click', function() {
       $('.sort-category-block').removeClass('active');
    });




    //drop menu icons hover
    $('.list-drop .move-pic1-js a').hover(function() {
    	$('.icon-menu-drop1').toggleClass('active');
    });

    $('.list-drop .move-pic2-js a').hover(function() {
    	$('.icon-menu-drop2').toggleClass('active');
    });

    $('.list-drop .move-pic3-js a').hover(function() {
    	$('.icon-menu-drop3').toggleClass('active');
    });

    $('.list-drop .move-pic4-js a').hover(function() {
    	$('.icon-menu-drop4').toggleClass('active');
    });

    $('.list-drop .move-pic5-js a').hover(function() {
    	$('.icon-menu-drop5').toggleClass('active');
    });

    $('.list-drop .move-pic6-js a').hover(function() {
    	$('.icon-menu-drop6').toggleClass('active');
    });

    $('.list-drop .move-pic7-js a').hover(function() {
    	$('.icon-menu-drop7').toggleClass('active');
    });

    $('.list-drop .move-pic8-js a').hover(function() {
    	$('.icon-menu-drop8').toggleClass('active');
    });

    $('.list-drop .move-pic9-js a').hover(function() {
    	$('.icon-menu-drop9').toggleClass('active');
    });

    $('.list-drop .move-pic10-js a').hover(function() {
    	$('.icon-menu-drop10').toggleClass('active');
    });
    $('.list-drop .move-pic11-js a').hover(function() {
    	$('.icon-menu-drop11').toggleClass('active');
    });

    $('.list-drop .move-pic12-js a').hover(function() {
    	$('.icon-menu-drop12').toggleClass('active');
    });

    $('.list-drop .move-pic13-js a').hover(function() {
    	$('.icon-menu-drop13').toggleClass('active');
    });

    $('.list-drop .move-pic14-js a').hover(function() {
    	$('.icon-menu-drop14').toggleClass('active');
    });

    $('.list-drop .move-pic15-js a').hover(function() {
    	$('.icon-menu-drop15').toggleClass('active');
    });

    $('.list-drop .move-pic16-js a').hover(function() {
    	$('.icon-menu-drop16').toggleClass('active');
    });

    $('.list-drop .move-pic17-js a').hover(function() {
    	$('.icon-menu-drop17').toggleClass('active');
    });

    $('.list-drop .move-pic18-js a').hover(function() {
    	$('.icon-menu-drop18').toggleClass('active');
    });

    $('.list-drop .move-pic19-js a').hover(function() {
    	$('.icon-menu-drop19').toggleClass('active');
    });

    $('.list-drop .move-pic20-js a').hover(function() {
    	$('.icon-menu-drop20').toggleClass('active');
    });

    $('.list-drop .move-pic21-js a').hover(function() {
    	$('.icon-menu-drop21').toggleClass('active');
    });

    $('.list-drop .move-pic22-js a').hover(function() {
    	$('.icon-menu-drop22').toggleClass('active');
    });


    // liked
    $('.no-liked-category').on('click', function(e) {
    	e.preventDefault();
    	$(this).toggleClass('active');
    });


    //basket anchor
	$('a[data-target="anchor"]').on('click', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		$(".item-basket-info .toggle-basket-info-block").eq(0).slideDown(1000);
		return false;
	});


	//pass1
	$('body').on('click', '.password-control1', function(e){
		e.preventDefault();
	if ($('#password-input1').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input1').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input1').attr('type', 'password');
	}
	return false;
});

	//pass2
	$('body').on('click', '.password-control2', function(e){
		e.preventDefault();
	if ($('#password-input2').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input2').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input2').attr('type', 'password');
	}
	return false;
});


	//pass3
	$('body').on('click', '.password-control3', function(e){
		e.preventDefault();
	if ($('#password-input3').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input3').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input3').attr('type', 'password');
	}
	return false;
});



	// Помощь анимации
	// data-wow-delay="0.3s" // задержка анимации
	// data-wow-offset="10" // — расстояние в пикселях от нижнего края браузера до верхней границы элемента необходимое для начала анимации;
	new WOW().init();



	//Попап менеджер FancyBox
	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши.
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        'close'
    	],
    	touch: false,
    	animationEffect : "zoom-in-out", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});

	// Маска для формы телефона https://github.com/RobinHerbots/Inputmask
    $("input[type='tel']").inputmask({
	  mask: '+7 (999) 999 99-99',
	  showMaskOnHover: false,
	  autoUnmask: true,
	});


	//Плавный скролл до блока .div по клику на .scroll
	$('a[data-target="anchor"]').on('click', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});



});





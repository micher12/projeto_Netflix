$(function(){
    //global
    function criarepisodios(callback){
        valorep = valorep + 1;
        // Cria o elemento <div> com a classe "epsingle"
        var divEpisodio = $('<div>').addClass('epsingle');
        // Cria o elemento <h2> com o texto "Episodio 01"
        var h2Episodio = $('<h2>').text('Episodio '+valorep);

        // Cria o elemento <div> com a classe "slidepicture" VULGA minitatura do ep
        var divSlide = $('<div>').addClass('slidepicture');

        // Adiciona o elemento <h2> e <div> dentro do elemento <div> com a classe "epsingle"
        divEpisodio.append(h2Episodio, divSlide);

        callback(divEpisodio)
    }

    //hoverMenu
    hoverMenu($('.navegation a.unfoqued'))
    function hoverMenu(el){
        el.hover(function(){
           $(this).css("color","#777");
        },function(){
            $(this).css("color","#ccc");
        });
    }

    //sinoadd
    sinoadd()
    function sinoadd(){
        var sino = $('.rightflex a:nth-of-type(3)');

        sino.click(function(){
           var num = parseInt($('.rightflex a > span').text());
           $('.rightflex a > span').text(num + 1);
        });
    }

    //playtrailer
    playetrailer()
    function playetrailer(){
        var banner = $(".banner");
        var video = $("video#trailer").get(0);

        banner.hover(function(){
            $('video#trailer').fadeIn();
            video.play()
        },function(){
            video.pause();
        });

        $(video).on('ended',function(){
            $('video#trailer').fadeOut()
        })
    }

    //slide
    slide()
    function slide(){

        //cliqueslider
        var sliderContainer = $('.slider,.slider2')
        var destaque = $('.destaque');
        destaqueativado = false;

        sliderContainer.on('click','.sliderinfo',function(){
            var divAnterior = $(this).parent(); //$('.singleslider')
            var classe = divAnterior.attr('class');
            var url = divAnterior.css('background-image')
            var contentdestaque = $('.contentdestaque')
            valorep = 0;
            var close = $('.close')
            
            
            if(destaqueativado){
                //nada aqui
            }else{
                function automatizar(){ //AUTOMATIZANDO -----------------------
                    title.text(titulo)
                    for(var i = 0; i < numerodeEPS; i++){
                            
                        criarepisodios(function(elemento){
                            epsingles.push(elemento)
                        })
                    }
                    for(var j = 0; j < epsingles.length; j++){
                        $('.destaqueContent').append(epsingles[j]);
                    }
                }

                destaqueativado = true;
                var title = $('.titledestaque')

                //importar dinamicamente o background pelo url
                if(classe === 'singleslider'){
                    //flash
                    epsingles = []
                    $('.epsingle').remove()
                    contentdestaque.css("background-image",url)
                    numerodeEPS = 1
                    titulo = 'Flash'; //---------------------------------------
                    automatizar()
                    $('.slidepicture').css('background-image',url);

    
                }else if(classe === 'singleslider __2'){
                    //pequena sereia
                    epsingles = []
                    $('.epsingle').remove()
                    numerodeEPS = 1
                    titulo = 'Pequena Sereia'; //---------------------------------------
                    automatizar()
                    contentdestaque.css("background-image",url)
                    $('.slidepicture').css('background-image',url)

                }else if(classe === 'singleslider __3'){
                    //mario
                    epsingles = []
                    $('.epsingle').remove()
                    contentdestaque.css("background-image",url)
                    numerodeEPS = 1
                    titulo = 'Super Mario Bross'; //---------------------------------------
                    automatizar()
                    $('.slidepicture').css('background-image',url)
                    
                }else if(classe === 'singleslider __5'){
                    //spider-man
                    epsingles = []
                    $('.epsingle').remove()
                    contentdestaque.css("background-image",url);
                    numerodeEPS = 1
                    titulo = 'Homem Aranha Atraves do Aranhaverso'; //---------------------------------------
                    automatizar();
                    $('.slidepicture').css('background-image',url);
                    
                }else if(classe === 'singleslider __4'){
                    //avengers
                    epsingles = []
                    $('.epsingle').remove()
                    contentdestaque.css("background-image",url);
                    numerodeEPS = 1
                    titulo = 'Vingadores Ultimato'; // ---------------------
                    automatizar();
                    $('.slidepicture').css('background-image',url);

                }else if(classe === 'singleslider __6'){
                    //oshi no ko
                    epsingles = []
                    $('.epsingle').remove()
                    contentdestaque.css("background-image",url)
                    numerodeEPS = 11;
                    titulo = 'Oshi no Ko'; //----------------------
                    automatizar()
                    $('.slidepicture').css('background-image',url)
                    var valor = $('.destaqueContent').find('.epsingle').eq(11).find('.slidepicture');
                    valor.css("background-image","url(../img/foto1.png)") //mudar imagem ep1
                    
                }else if(classe === 'singleslider __7'){
                    //Stranger Things
                    epsingles = []
                    $('.epsingle').remove()
                    contentdestaque.css("background-image",url)
                    numerodeEPS = 13;
                    titulo = 'Stranger Things'; //----------------------
                    automatizar()
                    $('.slidepicture').css('background-image',url)
                    
                }else if(classe === 'singleslider __8'){
                    //Demon Slayer
                    epsingles = []
                    $('.epsingle').remove()
                    contentdestaque.css("background-image",url)
                    numerodeEPS = 22;
                    titulo = 'Demon Slayer'; //----------------------
                    automatizar()
                    $('.slidepicture').css('background-image',url)
                    
                }else if(classe === 'singleslider __9'){
                    //The Last Of Us
                    epsingles = []
                    $('.epsingle').remove()
                    contentdestaque.css("background-image",url)
                    numerodeEPS = 12;
                    titulo = 'The Last Of Us'; //----------------------
                    automatizar()
                    $('.slidepicture').css('background-image',url)
                    
                }else if(classe === 'singleslider __10'){
                    //Com carinho Kitty
                    epsingles = []
                    $('.epsingle').remove()
                    contentdestaque.css("background-image",url)
                    numerodeEPS = 12;
                    titulo = 'Com carinho Kitty'; //----------------------
                    automatizar()
                    $('.slidepicture').css('background-image',url)
                    
                }

                destaque.stop().fadeIn(); 
            }

            close.on('click',function(){
                destaqueativado = false;
                destaque.stop().fadeOut()
            });
            
        });


        //effectslider destaque no hover
        var sliderContainer = $('.slider,.slider2');
        sliderContainer.on('mouseenter','.singleslider',function(){
            sliderContainer.find(".singleslider").css("opacity", "0.65").css("z-index", "1").css("transform", "scale(1)");
            $(this).css("opacity", "1").css("position", "relative").css("z-index", "3").css("transform", "scale(1.2)");
            var infoSpan = $(this).find("span.sliderinfo");
            infoSpan.stop().fadeIn();

        }).on('mouseleave','.singleslider',function(){
            sliderContainer.find('.singleslider').css("opacity","1").css("z-index","1").css("transform","scale(1)");
            var infoSpan = $(this).find('span.sliderinfo');    
            infoSpan.stop().fadeOut()
        });  

        //slider  -- AINDA PRECISA DE RESIZE
        var slide = $('.slider');
        var slider2 = $('.slider2');
        slide.slick({
            arrows: true,
            slidesToShow: 5,
            centerMode: false,
            infinite: false,
            slidesToScroll: 1,
            speed: 1000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            dots: false,
            responsive: [
                {
                    breakpoint: 1281,
                    settings: {
                        arrows: true,
                        slidesToShow: 4,
                        centerMode: false,
                        infinite: false,
                        slidesToScroll: 1,
                        speed: 1000,
                        prevArrow: $('.prev'),
                        nextArrow: $('.next'),
                        dots: false,
                    },
                },
                {
                    breakpoint: 961,
                    settings: {
                        arrows: true,
                        slidesToShow: 3,
                        centerMode: false,
                        infinite: false,
                        slidesToScroll: 1,
                        speed: 1000,
                        prevArrow: $('.prev'),
                        nextArrow: $('.next'),
                        dots: false,
                    },
                },
                {
                    breakpoint: 791,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                        centerMode: false,
                        infinite: false,
                        slidesToScroll: 1,
                        speed: 1000,
                        prevArrow: $('.prev'),
                        nextArrow: $('.next'),
                        dots: false,
                    },
                },
                {
                    breakpoint: 501,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        centerMode: false,
                        infinite: false,
                        slidesToScroll: 1,
                        speed: 1000,
                        dots: false,
                    },
                },
            ],
        });

        //Mobile
        mobile()
        function mobile(){

            var mobile = $('.mobile li p,.mobile li > a, .mainline span');
            var dark = $('.dark');
            var menuMobile = $('.mobilenav');
            menuaberto = false;
            animando = false;
            var line1  =$('.ln1');
            var line2  =$('.ln2');
            var line3  =$('.ln3');

            mobile.click(function(){
                if(animando) return
                animando = true;

                if(menuaberto){
                    menuaberto = false;
                    $('.mobile li > a > svg').css("transform",'rotateX(0)')
                    dark.stop().fadeOut()
                    line1.css("transform","rotate(0)").css("top","0")
                    line2.css("display","block");
                    line3.css("transform","rotate(0)").css("top","20px")
                    menuMobile.toggle('slide',{direction: 'up'},'slow',function(){
                        animando = false;
                    },1000)
                }else{
                    menuaberto = true;
                    $('.mobile li > a > svg').css("transform",'rotateX(180deg)')
                    dark.stop().fadeIn()
                    line1.css("transform","rotate(45deg)").css("top","13px")
                    line2.css("display","none");
                    line3.css("transform","rotate(-45deg)").css("top","13px")
                    menuMobile.toggle('slide',{direction: 'up'},'slow',function(){
                        animando = false;
                    },1000)
                }
            });
            dark.click(function(){
                menuaberto = false;
                menuaberto = false;
                    $('.mobile li > a > svg').css("transform",'rotateX(0)')
                    dark.stop().fadeOut()
                    line1.css("transform","rotate(0)").css("top","0")
                    line2.css("display","block");
                    line3.css("transform","rotate(0)").css("top","20px")
                    menuMobile.toggle('slide',{direction: 'up'},'slow',function(){
                        animando = false;
                    },1000)
            })

            $(window).resize(function(){
                if($(window).width() > 960){
                    if(menuaberto){
                        menuaberto = false;
                        $('.mobile li > a > svg').css("transform",'rotateX(0)')
                        dark.stop().fadeOut()
                        line1.css("transform","rotate(0)").css("top","0")
                        line2.css("display","block");
                        line3.css("transform","rotate(0)").css("top","20px")
                        menuMobile.toggle('slide',{direction: 'up'},'slow',function(){
                            animando = false;
                        },1000)
                    }
                }
            });
        }


        slider2.slick({
            arrows: true,
            slidesToShow: 5,
            centerMode: false,
            infinite: false,
            slidesToScroll: 1,
            speed: 1000,
            prevArrow: $('.prev1'),
            nextArrow: $('.next1'),
            dots: false,
            responsive: [
                {
                    breakpoint: 1281,
                    settings: {
                        arrows: true,
                        slidesToShow: 4,
                        centerMode: false,
                        infinite: false,
                        slidesToScroll: 1,
                        speed: 1000,
                        prevArrow: $('.prev1'),
                        nextArrow: $('.next1'),
                        dots: false,
                    },
                },
                {
                    breakpoint: 961,
                    settings: {
                        arrows: true,
                        slidesToShow: 3,
                        centerMode: false,
                        infinite: false,
                        slidesToScroll: 1,
                        speed: 1000,
                        prevArrow: $('.prev1'),
                        nextArrow: $('.next1'),
                        dots: false,
                    },
                },
                {
                    breakpoint: 791,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                        centerMode: false,
                        infinite: false,
                        slidesToScroll: 1,
                        speed: 1000,
                        prevArrow: $('.prev1'),
                        nextArrow: $('.next1'),
                        dots: false,
                    },
                },
                {
                    breakpoint: 501,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        centerMode: false,
                        infinite: false,
                        slidesToScroll: 1,
                        speed: 1000,
                        dots: false,
                    },
                },
            ],
        });

        //apenas resposta
        var play = $('.contentdestaque .play');
        var info = $('.contentdestaque .info');
        play.click(function(){
            alert('Inicio...')
        })
        info.click(function(){
            alert('em breve...')
        })
    }

});

//js normal
var vid = document.getElementById("trailer");
vid.volume = 0.3;
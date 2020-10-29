const Slider = function(opt){
        var slider = {}; // i'm using this object to add variables from the functions below and make them available to the other functions
        var currentSlide = 0;
        var nextSlide = 1;
        var sliderInterval;

        var _init = function(options){
            //recieve options, we need the -el- attribute
            slider.el = $(options.el); 
            console.log(slider.el)
            slider.items = slider.el.find("[class^='sliderSlide']");
            console.log(slider.items)
            slider.sliderLength = slider.items.length;
            slider.offset = slider.el.children().length - slider.sliderLength;
            createNavigation();
            setSliderInterval();

        }

        var createNavigation = function(){
            //create the -buttons- to navigate between slides
            var ulSlider = slider.el.find('.slider-nav'); //position this where you want your navigation buttons to be
            var newLI = '<li></li>';
            var newLIActive = '<li class= "active"></li>';
            for (var i = 0; i< slider.sliderLength ; i++){
                if (i === 0){
                    ulSlider.append(newLIActive);   
                }
                else{
                    ulSlider.append(newLI);
                }
            }
            addEventListeners();
        };

        var addEventListeners = function(){
            // add event binders to the dynamically added li elements
            slider.el.find('.slider-nav').on('click', 'li', function() {
                //set this -> this will be the  to be the next slide, stop the function interval and start it again 
                nextSlide = $(this).index();
                clearInterval(sliderInterval);
                startSlider();
                setSliderInterval();
            });
        }

        var setSliderInterval = function(){
            sliderInterval = setInterval(startSlider, 4000);
        };

        var startSlider = function(){
            var mainDivs = slider.items;
            var ulSlider = slider.el.find('.slider-nav');
            //which slide comes next?
            if(nextSlide >= slider.sliderLength){
                nextSlide = 0;
                currentSlide = slider.sliderLength -1;
            }

            //animations using the eq selector
            //we first add the animation class, and then remove the previous one we don't want
            //toggle class, it results in an unwanted behaviour
            mainDivs.eq(currentSlide).find('h1').addClass('fade-out-bottom-top');
            mainDivs.eq(currentSlide).find('h1').removeClass('fade-in-top-bottom');

            mainDivs.eq(currentSlide).find('p').addClass('fade-out-left-right');
            mainDivs.eq(currentSlide).find('p').removeClass('fade-in-left-right');

            mainDivs.eq(currentSlide).find('a').addClass('fade-out-top-bottom');
            mainDivs.eq(currentSlide).find('a').removeClass('fade-in-bottom-top');

            mainDivs.eq(currentSlide).fadeOut('slow');

            mainDivs.eq(nextSlide).find('h1').addClass('fade-in-top-bottom');
            mainDivs.eq(nextSlide).find('h1').removeClass('fade-out-bottom-top');

            mainDivs.eq(nextSlide).find('p').addClass('fade-in-left-right');
            mainDivs.eq(nextSlide).find('p').removeClass('fade-out-left-right');

            mainDivs.eq(nextSlide).find('a').addClass('fade-in-bottom-top');
            mainDivs.eq(nextSlide).find('a').removeClass('fade-out-top-bottom');

            mainDivs.eq(nextSlide).delay(300).fadeIn('slow');

            //find offset of child elements to use their index to match the current slide with the selected button
            ulSlider.children().removeClass("active");
            ulSlider.children().eq(mainDivs.eq(nextSlide).index() - slider.offset).addClass("active");


            //update variables
            currentSlide = nextSlide;
            nextSlide += 1;
        };

        return {
            init: _init // reveal only the init function
        }

    }
(function() {
    'use strict';
    var slider = (function() {
        var $slider = $('#slider'),
            $next = $('#next'),
            $previous = $('#previous'),
            $stop = $('#stop'),
            $restart = $('#restart'),
            basefolder = null,
            imgIndex = 1,
            maxIndex = 13,
            timer = null;

        function render() {
            $slider.attr('src', basefolder + '/img-' + imgIndex + '.jpeg');
        }

        function startTimer() {
            timer = setInterval(nextImg, 1000);
        }

        function nextImg(event) {
            imgIndex = imgIndex >= maxIndex ? 1 : ++imgIndex;
            render();
        }

        function previousImg(event) {
            imgIndex = imgIndex <= 1 ? maxIndex : --imgIndex;
            render();
        }

        function stopTimer(event) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        }

        $next.click(nextImg);
        $previous.click(previousImg);
        $stop.click(stopTimer);
        $restart.click(function(event) {
            stopTimer();
            imgIndex = 1;
            startTimer();
        });

        function init(imgCount, imgFolder) {
            console.log('Image Slider inicialized');
            maxIndex = imgCount;
            basefolder = imgFolder;
            startTimer();
        }


        return {
            init: init
        };
    })();

    $(function() {
        slider.init(13, 'slide_img');
    });


})();
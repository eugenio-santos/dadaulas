var slider = (function() {
    'use strict';
    var imgIndex = 1,
        maxIndex = 13,
        baseFolder = null,
        imgHolder = document.getElementById('slider'),
        next = document.getElementById('next'),
        previous = document.getElementById('previous'),
        stopBtn = document.getElementById('stop'),
        restartBtn = document.getElementById('restart'),
        timer = null;

    function render() {
        imgHolder.src = baseFolder + '/img-' + imgIndex + '.jpeg';
    }

    function nextSlide() {
        if (imgIndex >= maxIndex) {
            imgIndex = 0;
        }
        imgIndex++;
        render();
    }

    function prevSlide() {
        if (imgIndex <= 1) {
            imgIndex = maxIndex + 1;
        }
        imgIndex--;
        render();
    }

    function stop() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function restart() {
        stop();
        imgIndex = 1;
        render();
        startTimer();
    }

    function startTimer() {
        timer = setInterval(nextSlide, 2000);
    }

    function init(imageCount, imageFolder) {
        maxIndex = imageCount;
        baseFolder = imageFolder;
        console.log('Slider initialized');
        startTimer();
    }

    next.addEventListener("click", nextSlide);
    previous.addEventListener("click", prevSlide);
    stopBtn.addEventListener("click", stop);
    restartBtn.addEventListener("click", restart);

    return {
        initSlider: init
    };
})();

slider.initSlider(13, 'slide_img');



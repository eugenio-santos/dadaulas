(function() {
    'use strict';
    $(function() {
        var $actionBar = $('#actionBar'),
            $genius = $('.invisible');

        $('button:first-child', $actionBar).click(function() {
            $genius.toggleClass('invisible');
        });

        $('button:nth-child(2)', $actionBar).hover(function() {
            $genius.removeClass('invisible');
        });

        $('button:last-child', $actionBar).hover(function() {
            $genius.addClass('invisible');
        });
    });
})();
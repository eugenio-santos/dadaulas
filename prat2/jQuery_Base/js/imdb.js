(function() {
    'use strict';
    var $_MEDIA = $('.media:first').clone();
    $(function() {
        $(':submit').click(function(event) {
            event.preventDefault();
            callApi($('#search').val());
        });
    });

    function callApi(searchString) {
        $.ajax({
                url: 'http://www.omdbapi.com/?s=' + searchString,
                dataType: 'json',
            })
            .done(function(data) {
                console.log('receiving data');
                renderResults(data);
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
                $('#resultPanel').children('div').children('h3').children('span').text(searchString);

            });
    }

    function renderResults(data) {
        console.log('render');
        $('#resultPanel').removeClass('hidden');
        var $panelBody = $('.panel-body'),
            $singleResult = $_MEDIA,
            $newEntry = null;
        $panelBody.empty();

        if (data.Response == "True") {
            console.log('true');
            console.log(data.Search);
            data.Search.forEach(function(element, index) {
                var $newEntry = $singleResult.clone();

                $newEntry.children('.media-left').children('a').children('img').attr('src', element.Poster);
                $newEntry.children('.media-body').children('h4').html(element.Title);
                $newEntry.children('.media-body').children('p').text('Year: ' + element.Year + ' Type:' + element.Type);

                $panelBody.append($newEntry);
            });
        } else {
            console.log('false');
            $panelBody.html('<h5>No entrys for your search</h5>');
        }
    }
})();
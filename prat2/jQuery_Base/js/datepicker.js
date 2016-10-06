(function() {
    'use strict';
    $(function() {
        $('#date1').datepicker();
        $('#date2').datepicker({
            minDate: "-1M",
            maxDate: +0
        });

        $('#date3').datepicker($.datepicker.regional["pt"]);
        $('#date4').datepicker({
            minDate: "-1M",
            maxDate: +0,
        }, $.datepicker.regional.pt);

    });
})();
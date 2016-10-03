(function() {
    'use strict';
    $(function() {
        var $name = $('#name'),
            $nameOut = $('#nameOutput'),
            $period = $('#period'),
            $periodOutput = $('#periodOutput'),
            $grade = $('#grade'),
            $gradeOutput = $('#gradeOutput'),
            emptyVal = 'Empty';

        function updateName() {
            $nameOut.text($name.val() || emptyVal);
        }

        function updateGrade() {
            $gradeOutput.text($grade.val() || emptyVal);
        }

        function updatePeriod() {
            //$periodOutput.text($period.val() + ' ' + $('$period option:selected').text());
            $periodOutput.text($period.val() + ' ' + $('#period option:selected').text() || emptyVal);
        }

        function updateForm() {
            updateName();
            updateGrade();
            updatePeriod();
        }

        $(':reset').click(function(event) {
            event.preventDefault();
            $name.val('');
            $grade.val('');
            $('#period option:selected').removeAttr('selected');
            $period.val('P');

            updateForm();
            //return false;
        });

        $name.change(function(event) {
            updateName();
        });

        $grade.keyup(function(event) {
            updateGrade();
        });

        $period.change(function(event) {
            updatePeriod();
        });

        updateForm();
    });
})();
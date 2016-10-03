(function(){
    "use strict";

    var name = document.getElementById("name"),
        nOutput = document.getElementById("nameOutput"),
        grd = document.getElementById("grade"),
        gOutput = document.getElementById("gradeOutput"),
        prd = document.getElementById("period"),
        pOutput = document.getElementById("periodOutput"),
        emptyValue = "Empty",
        gradeForm = document.getElementsByTagName('form')[0];

        var updateGradeOutput = function() {
            gOutput.textContent = grd.value || emptyValue;
        };

        var updateNameOutput = function() {
            nOutput.textContent = name.value || emptyValue;
        };

        var updateEvaluationPeriod = function() {
            var selectedValue = prd.value;
            var selectedText = prd.options[prd.selectedIndex].textContent;
            pOutput.textContent = selectedValue + " ( " + selectedText + " ) ";
        };

        var resetForm = function(e){
            name.value = '';
            grd.value = '';
            prd.selectedIndex = 0;
            updateNameOutput();
            updateGradeOutput();
            updateEvaluationPeriod();
            e.preventDefault();
        };

        name.addEventListener("change", updateNameOutput);
        grd.addEventListener("keyup", updateGradeOutput);
        prd.addEventListener("change", updateEvaluationPeriod);
        gradeForm.addEventListener("reset", resetForm);
        resetForm();
})();

(function() {
    'use strict';

    function askName() {
        var name = prompt("Your name?");
        if (name) {
            alert(name);
        }
    }
    // Forma normal
    // $(document).ready(function() {
    //     askName();
    // });
    // Forma abreviada para o document.ready
    $(function() {
        askName();
    });
})();

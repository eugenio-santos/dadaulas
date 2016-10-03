(function() {
    "use strict";

    var secret = document.getElementById("secret");

    var actionBar = document.getElementById("actionBar");
    var buttons = actionBar.getElementsByTagName("button");
    var buttonClose = secret.getElementsByTagName("button")[0];

    // Como variável, a função tem de ser definida antes de ser usada
    var toggle = function(){
        secret.classList.toggle("invisible");
    };

    buttons[0].addEventListener("click", toggle);
    buttons[1].addEventListener("mouseenter", show);
    buttons[2].addEventListener("mouseenter", hide);
    buttonClose.addEventListener("click", hide);


    function hide(){
        secret.classList.add("invisible");
    }

    function show(){
        secret.classList.remove("invisible");
    }
})();


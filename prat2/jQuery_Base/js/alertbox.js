(function () {
'use strict';

function askName() {
    var name = prompt ('I WANT NAMES!');
    if(name)
    {
        alert(name);
    }
}

$( document ).ready(function () {
    askName(); 
});    
})();

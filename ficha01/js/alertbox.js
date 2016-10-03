(function(){
    "use strict";

    var message = "Inserir Nome:";
    var nome = prompt(message);
    // <=> window.prompt(message)
    // <=> window.alert(nome)
    if (nome) {
        alert(nome);
        console.log(nome);
    }
})();

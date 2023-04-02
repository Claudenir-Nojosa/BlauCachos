$("documento").ready(function(){

    $("#telefone").mask("(00) 0000-0000");

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome",
            email: "Por favor, insira o seu email",
            telefone: "Por favor, insira o seu telefone",
        },

        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
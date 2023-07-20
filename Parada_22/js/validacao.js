function validacao(){

    let nome = document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let data = document.getElementById("i_data");
    let email = document.getElementById("i_email");
    let url = document.getElementById("i_url");
    let foto = document.getElementById("i_file");

    estilo_input(nome, "#E63946", "#808080");
    estilo_input(sobrenome, "#E63946", "#808080");
    estilo_input(data, "#E63946", "#808080");
    estilo_input(email, "#E63946", "#808080");
    estilo_input(url, "#E63946", "#808080");
    estilo_input(foto, "#E63946", "#808080");

}

function estilo_input(input, cor_1, cor_2){

    var alert = document.getElementById("f_alert");

    if(!input.checkValidity()){
        alert.style.display = "block";
        return input.style.border = `5px solid ${cor_1}`;
    }else{
        return input.style.border = `2px solid ${cor_2}`;
    }

}
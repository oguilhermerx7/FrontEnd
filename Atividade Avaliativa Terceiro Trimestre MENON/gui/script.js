function enviar() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const masculino = document.getElementById("masculino").checked;
    const feminino = document.getElementById("feminino").checked;
    const resposta = document.getElementById("resposta");
    const respostaImagem = document.getElementById("resposta-imagem");

    if (nome === "" || idade < 0 || isNaN(idade)) {
        resposta.innerHTML = "Preencha todos os campos corretamente";
        respostaImagem.src = "";
    } else if (!masculino && !feminino) {
        resposta.innerHTML = "Selecione um gênero";
        respostaImagem.src = "";
    } else if (masculino) {
        resposta.innerHTML = `Você se chama ${nome}, tem ${idade} anos e é um homem.`;
        if (idade < 3) {
            respostaImagem.src = "./img/bebemasc.jpg.jpg";
        } else if (idade < 13) {
            respostaImagem.src = "./img/bartmasc.jpg";
        } else if (idade < 65) {
            respostaImagem.src = "./img/adultomasc.jpg";
        } else {
            respostaImagem.src = "./img/idosomasc.jpg";
        }
    } else if (feminino) {
        resposta.innerHTML = `Você se chama ${nome}, tem ${idade} anos e é uma mulher.`;
        if (idade < 3) {
            respostaImagem.src = "./img/bebefem.jpg";
        } else if (idade < 13) {
            respostaImagem.src = "./img/adolesfem.jpg";
        } else if (idade < 65) {
            respostaImagem.src = "./img/adultafem.jpg";
        } else {
            respostaImagem.src = "./img/idosafem.jpg";
        }
    }
}

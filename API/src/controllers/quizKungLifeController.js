var quizKungLifeModel = require("../models/quizKungLifeModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo quizKungLifeKungLife.html
    var fkUsuario = req.body.fkUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;

    // Faça as validações dos valores
    if (pontuacao == undefined) {
        res.status(400).send("Sua pontução está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizKungLifeModel.js
        quizKungLifeModel.cadastrar(pontuacao, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}
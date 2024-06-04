var database = require("../database/config");

function obterMenorPontuacao(fkUsuario) {

    var instrucaoSql = `select max(pontuacao) as maiorPontuacao, min(pontuacao) as menorPontuacao, round(avg(pontuacao), 2) as mediaPontuacao
    from pontuacao_quiz
    WHERE fkUsuario = ${fkUsuario};`;
                       
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterMaiorPontuacao(fkUsuario) {

    var instrucaoSql = `SELECT 
                       max(pontuacao) as 'Maior Pontuação'
                    FROM quiz
                    WHERE fkUsuario = ${fkUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterMediaPontuacao() {

    var instrucaoSql = `SELECT round(avg(pontuação)) as 'Média Pontuação'
                         FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoPontuacaoUsuario(fkUsuario) {

    var instrucaoSql = `SELECT 
    pontuacao as 'Pontuação'
 FROM pontuacao_quiz
 WHERE fkUsuario = ${fkUsuario}
 LIMIT 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    obterMenorPontuacao,
    obterMaiorPontuacao,
    obterMediaPontuacao,
    graficoPontuacaoUsuario,
}
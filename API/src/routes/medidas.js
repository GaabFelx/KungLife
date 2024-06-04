var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/obterMenorPontuacao/:fkUsuario", function (req, res) {
    medidaController.obterMenorPontuacao(req, res);
  })

  router.get("/obterMaiorPontuacao/:fkUsuario", function (req, res) {
    medidaController.obterMaiorPontuacao(req, res);
  })

  router.get("/obterMediaPontuacao", function (req, res) {
    medidaController.obterMediaPontuacao(req, res);
  })


module.exports = router;
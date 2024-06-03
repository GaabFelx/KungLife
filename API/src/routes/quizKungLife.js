var express = require("express");
var router = express.Router();

var quizKungLifeController = require("../controllers/quizKungLifeController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizKungLifeController.js
router.post("/cadastrar", function (req, res) {
    quizKungLifeController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     quizKungLifeController.autenticar(req, res);
// });

module.exports = router;
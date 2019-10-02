const Spot = require("../models/Spot");
const User = require("../models/Users");
//listagem, Listar unica sessão , criar, atualizar  , destruir-deletar
//index,    show,               store,   update,    destroy
module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;
    const spots = await Spot.find({ user: user_id });
    return res.json(spots);
  }
};

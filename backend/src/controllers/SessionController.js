const User = require("../models/Users");
//listagem, Listar unica sessão , criar, atualizar  , destruir-deletar
//index,    show,               store,   update,    destroy
module.exports = {
  async store(req, res) {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }
    return res.json(user);
  }
};
